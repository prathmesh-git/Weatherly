import { useState } from "react";
import { Container, Typography, Paper, Box, useTheme } from "@mui/material";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import logo from "./assets/favicon.png";

export default function WeatherApp() {
  const theme = useTheme();

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
    <Container
      maxWidth="sm"
      sx={{
        py: 6,
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          p: 4,
          borderRadius: 5,
          width: {
            xs: "90%",
            sm: "500px",
            md: "600px",
            lg: "800px",
          },
          backgroundColor: "#1e1e1e",
          color: "#fff",
          boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          color="primary"
          fontWeight="bold"
          textAlign="center"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mb: 4,
          }}
        >
          <img
            src="/favicon.png"
            alt="Weatherly Logo"
            height="38"
            style={{ filter: "drop-shadow(0 0 4px #90caf9)" }}
          />
          Weatherly
        </Typography>

        <Box sx={{ mt: 2, mb: 4 }}>
          <SearchBox updateInfo={updateInfo} />
        </Box>

        <InfoBox info={weatherInfo} />
      </Paper>
    </Container>
  );
}
