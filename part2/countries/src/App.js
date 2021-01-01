import { useEffect, useState } from "react";
import axios from "axios";
import CountriesDetails from "./components/CountryDetails";
import SearchBar from "./components/SearchBar";

function App() {
	const [countries, setCountries] = useState([]);
	const [search, setSearch] = useState("");
	const [country, setCountry] = useState({});

	useEffect(() => {
		axios.get("https://restcountries.eu/rest/v2/all").then(res => {
			setCountries(res.data);
		});
	}, []);

	const filteredCountries = search
		? countries.filter(country =>
				country.name.toLowerCase().includes(search.toLowerCase())
		  )
		: [];

	return (
		<div className="App">
			<SearchBar search={search} setSearch={setSearch} />
			<CountriesDetails
				filteredCountries={filteredCountries}
				country={
					filteredCountries.length === 1 ? filteredCountries[0] : country
				}
				setCountry={setCountry}
			/>
		</div>
	);
}

export default App;
