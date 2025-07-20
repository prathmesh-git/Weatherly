import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather{city name}";
  const API_key = "0af1df45e5bd5dfd4f7016d05007817f";

  let getWeatherUnfo = async (city) => {
    await fetch(`${API_URL}?q=${city}&appid=${API_key}`);
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
  };
  return (
    <>
      <div className="SearchBox">
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <Button variant="outlined" type="submit">
            Search
          </Button>
        </form>
      </div>
    </>
  );
}
