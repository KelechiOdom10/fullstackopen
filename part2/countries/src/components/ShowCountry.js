import React, { useEffect, useState } from "react";
import axios from "axios";

function ShowCountry({ country }) {
	const [weatherDetails, setWeatherDetails] = useState({});

	const { name, capital, population, languages, flag } = country;
	const api_key = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		axios
			.get(
				`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
			)
			.then(response => {
				console.log(response.data);
				const {
					temperature,
					weather_icons,
					wind_speed,
					wind_dir,
				} = response.data.current;
				setWeatherDetails({
					temperature,
					weather_icons,
					wind_speed,
					wind_dir,
				});
			});
	}, [api_key, capital]);

	return (
		<div>
			<h1>{name}</h1>
			<p>capital {capital}</p>
			<p>population {population}</p>
			<h2>Spoken Languages</h2>
			<ul>
				{languages.map(language => (
					<li key={language.name}>{language.name}</li>
				))}
			</ul>
			<img
				src={flag}
				alt="flag"
				style={{
					width: "180px",
				}}
			></img>
			<h2>Weather at {capital}</h2>
			<p>
				<b>temperature</b>: {weatherDetails.temperature} Celcius
			</p>
			<img src={weatherDetails.weather_icons} alt="weather icon"></img>
			<p>
				<b>wind:</b> {weatherDetails.wind_speed} mph direction{" "}
				{weatherDetails.wind_dir}
			</p>
		</div>
	);
}

export default ShowCountry;
