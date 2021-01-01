import React from "react";
import ShowCountry from "./ShowCountry";

function CountriesDetails({ filteredCountries, setCountry, country }) {
	return (
		<>
			{filteredCountries.length > 10 && (
				<p>Too many matches, specify another filter</p>
			)}
			{filteredCountries.length > 1 &&
				filteredCountries.length < 10 &&
				filteredCountries.map(country => (
					<p key={country.name}>
						{country.name}
						<button onClick={() => setCountry(country)}>show</button>
					</p>
				))}

			{country.languages !== undefined && (
				<ShowCountry
					country={
						filteredCountries.length === 1 ? filteredCountries[0] : country
					}
				/>
			)}
		</>
	);
}

export default CountriesDetails;
