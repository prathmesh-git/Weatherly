import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox() {
  const INIT_URL =
    "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let info = {
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "Haze",
  };

  return (
    <div className="InfoBox">
      <h1>WeatherInfo - {info.weather}</h1>
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}</p>
              <p>Min Temp: {info.tempMin}</p>
              <p>Max Temp: {info.tempMax}</p>
              <p>
                The Weather can be described as <i>{info.weather}</i> and Feels
                Like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
