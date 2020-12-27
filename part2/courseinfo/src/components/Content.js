import React from "react";
import Part from "./Part";
import Total from "./Total";

function Content({ parts }) {
	return (
		<>
			{parts.map(part => (
				<Part key={part.id} part={part} />
			))}
			<Total parts={parts} />
		</>
	);
}

export default Content;
