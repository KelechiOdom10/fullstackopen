import React from "react";

function Total({ parts }) {
	const totalExercises = parts.reduce((acc, part) => acc + part.exercises, 0);

	return <h4>total of {totalExercises} exercises</h4>;
}

export default Total;
