import React from "react";

function Persons({ persons }) {
	return (
		<>
			{persons.map(person => (
				<p key={person.name}>
					{person.name} {person.number}
				</p>
			))}
		</>
	);
}

export default Persons;