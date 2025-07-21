import { useState } from "react";
import { Container, Typography, Paper, Box, useTheme } from "@mui/material";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const theme = useTheme(); // access current theme
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "Haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 4,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          color="primary"
          fontWeight="bold"
          textAlign="center"
        >
          Weatherly
        </Typography>

        <Box sx={{ mt: 3, mb: 4 }}>
          <SearchBox updateInfo={updateInfo} />
        </Box>

        <InfoBox info={weatherInfo} />
      </Paper>
    </Container>
  );
}
