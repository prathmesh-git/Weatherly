import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "Haze",
  });
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Weatherly</h3>
      <SearchBox />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
