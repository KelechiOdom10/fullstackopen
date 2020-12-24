import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, handleClick }) => {
	return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = ({ statistics }) => {
	const { good, neutral, bad } = statistics;
	const total = good + neutral + bad;
	const weightedTotal = good + neutral * 0 + bad * -1;
	const average = weightedTotal / total;
	const positive = (good * 100) / total;

	return (
		<>
			<h2>statistics</h2>
			{total > 0 ? (
				<table>
					<tbody>
						<Statistic text="good" value={good} />
						<Statistic text="neutral" value={neutral} />
						<Statistic text="bad" value={bad} />
						<Statistic text="all" value={total} />
						<Statistic text="average" value={isNaN(average) ? 0 : average} />
						<Statistic
							text="positive"
							value={isNaN(positive) ? 0 : positive + "%"}
						/>
					</tbody>
				</table>
			) : (
				<p>No feedback given</p>
			)}
		</>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>give feedback</h1>
			<Button text="good" handleClick={() => setGood(good => good + 1)} />
			<Button
				text="neutral"
				handleClick={() => setNeutral(neutral => neutral + 1)}
			/>
			<Button text="bad" handleClick={() => setBad(bad => bad + 1)} />
			<Statistics statistics={{ good, neutral, bad }} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
