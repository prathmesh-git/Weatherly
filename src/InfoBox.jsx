import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  useTheme,
  Stack,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import OpacityIcon from "@mui/icons-material/Opacity";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import NotesIcon from "@mui/icons-material/Notes";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

export default function InfoBox({ info }) {
  const theme = useTheme();

  const RAIN_URL =
    "https://images.unsplash.com/photo-1636414795389-2cd7bb362560?w=1000&auto=format&fit=crop&q=60";
  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60";
  const COLD_URL =
    "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=1000&auto=format&fit=crop&q=60";

  const imageUrl =
    info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL;

  const WeatherIcon =
    info.humidity > 80
      ? ThunderstormIcon
      : info.temp > 15
      ? WbSunnyIcon
      : AcUnitIcon;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", px: 2 }}>
      <Card
        sx={{
          maxWidth: 450,
          width: "100%",
          borderRadius: 4,
          overflow: "hidden",
          backdropFilter: "blur(12px)",
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          color: theme.palette.text.primary,
        }}
        elevation={0}
      >
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt="Weather Image"
        />

        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={1}
            mb={2}
          >
            <Typography variant="h5" fontWeight="bold">
              {info.city}
            </Typography>
            <WeatherIcon fontSize="large" />
          </Box>

          <Stack spacing={1}>
            <Box display="flex" alignItems="center" gap={1}>
              <DeviceThermostatIcon />
              <Typography>Temperature: {info.temp}°C</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <OpacityIcon />
              <Typography>Humidity: {info.humidity}%</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <ArrowDownwardIcon />
              <Typography>Min Temp: {info.tempMin}°C</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <ArrowUpwardIcon />
              <Typography>Max Temp: {info.tempMax}°C</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <NotesIcon />
              <Typography>
                {info.weather}, feels like {info.feelslike}°C
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
