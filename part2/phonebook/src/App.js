import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:3002/persons")
			.then(res => setPersons(res.data));
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		if (persons.some(person => person.name === newName)) {
			alert(`${newName} is already added to phonebook`);
		} else {
			const updatedPersons = [...persons, { name: newName, number: newNumber }];
			setPersons(updatedPersons);
			setNewName("");
			setNewNumber("");
		}
	};

	const handleFilter = e => {
		setFilter(e.target.value);
	};

	const handleName = e => {
		setNewName(e.target.value);
	};

	const handleNumber = e => {
		setNewNumber(e.target.value);
	};

	const filteredPersons = filter
		? persons.filter(person =>
				person.name.toLowerCase().includes(filter.toLowerCase())
		  )
		: persons;

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter value={filter} handleChange={handleFilter} />

			<h2>add a new</h2>
			<PersonForm
				handleSubmit={handleSubmit}
				name={newName}
				number={newNumber}
				handleNameChange={handleName}
				handleNumberChange={handleNumber}
			/>

			<h2>Numbers</h2>
			<Persons persons={filteredPersons} />
		</div>
	);
};

export default App;
