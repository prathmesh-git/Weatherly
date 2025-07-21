import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Stack,
  useTheme,
} from "@mui/material";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const theme = useTheme();

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_key = import.meta.env.VITE_WEATHER_API_KEY;

  const formatCityName = (name) => {
    return name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getWeatherInfo = async () => {
    const formattedCity = formatCityName(city);
    try {
      const response = await fetch(
        `${API_URL}?q=${formattedCity}&appid=${API_key}&units=metric`
      );
      const jsonResponse = await response.json();

      if (!response.ok) throw new Error("Invalid city");

      return {
        city: formattedCity, // use the formatted version here
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ textAlign: "center", mt: 2 }}
    >
      <Stack spacing={2} alignItems="center">
        <TextField
          id="city"
          label="Enter City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          sx={{
            width: "100%",
            maxWidth: "300px",
            input: {
              color: theme.palette.text.primary,
            },
            label: {
              color: theme.palette.text.secondary,
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.divider,
              },
              "&:hover fieldset": {
                borderColor: theme.palette.primary.main,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            px: 4,
            py: 1,
            fontWeight: "bold",
            borderRadius: 2,
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
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
