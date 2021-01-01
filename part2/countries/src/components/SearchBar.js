import React from "react";

function SearchBar({ search, setSearch }) {
	return (
		<>
			<label htmlFor="country">Find Countries: </label>
			<input
				type="text"
				id="country"
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
		</>
	);
}

export default SearchBar;
