import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import WeatherApp from "./WeatherApp";
import "./App.css";

// Define a dark theme with a custom primary color
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Light blue
    },
    background: {
      default: "#121212", // Deep dark
      paper: "#1e1e1e", // Card background
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

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
