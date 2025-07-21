import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  responsiveFontSizes,
} from "@mui/material";
import WeatherApp from "./WeatherApp";
import "./App.css";

let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Soft blue
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

darkTheme = responsiveFontSizes(darkTheme); // make typography responsive

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="app-container">
        <WeatherApp />
      </div>
    </ThemeProvider>
  );
};

export default App;
