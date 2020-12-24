import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => (
	<button onClick={handleClick}>{text}</button>
);

const MostVotes = ({ votes, anecdotes }) => {
	const index = votes.indexOf(Math.max(...votes));
	return (
		<>
			<Header text="Anecdotes with most votes" />
			<p>
				{anecdotes[index]} has {votes[index]} votes{" "}
			</p>
		</>
	);
};

const App = props => {
	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

	const handleRandomIndexClick = () => {
		const randomIndex = Math.floor(Math.random() * anecdotes.length);
		setSelected(randomIndex);
	};

	const handleVoteClick = () => {
		const updatedVotes = [...votes];
		updatedVotes[selected] += 1;
		setVotes(updatedVotes);
	};

	return (
		<div>
			<Header text="Anecdote of the day" />
			<p>
				{props.anecdotes[selected]} has {votes[selected]} votes{" "}
			</p>
			<Button handleClick={handleVoteClick} text="vote" />
			<Button handleClick={handleRandomIndexClick} text="next anecdote" />
			<MostVotes anecdotes={anecdotes} votes={votes} />
		</div>
	);
};

const anecdotes = [
	"If it hurts, do it more often",
	"Adding manpower to a late software project makes it later!",
	"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
	"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
	"Premature optimization is the root of all evil.",
	"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
