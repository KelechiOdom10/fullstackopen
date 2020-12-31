import React from "react";

function Filter({ value, handleChange }) {
	return <input value={value} onChange={handleChange} />;
}

export default Filter;
