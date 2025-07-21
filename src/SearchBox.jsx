import { useState } from "react";
import { TextField, Button, Box, Typography, Stack } from "@mui/material";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_key = "0af1df45e5bd5dfd4f7016d05007817f";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_key}&units=metric`
      );
      const jsonResponse = await response.json();

      if (!response.ok) throw new Error("Invalid city");

      return {
        city: city,
        feelslike: jsonResponse.main.feels_like,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
      };
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
    setError(false);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ textAlign: "center" }}>
      <Stack spacing={2} alignItems="center">
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          sx={{ width: "100%", maxWidth: "300px" }}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <Typography color="error" variant="body2">
            No such place exists in our API!
          </Typography>
        )}
      </Stack>
    </Box>
  );
}
