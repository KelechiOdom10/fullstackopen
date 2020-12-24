import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => {
	return <h1>{course}</h1>;
};

const Part = ({ part }) => {
	return (
		<p>
			{part.name} {part.exercises}
		</p>
	);
};

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map(part => (
				<Part key={part.name} part={part} />
			))}
		</div>
	);
};

const Total = ({ parts }) => {
	let totalExercises = 0;

	{
		parts &&
			parts.forEach(part => {
				totalExercises += part.exercises;
			});
	}

	return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
