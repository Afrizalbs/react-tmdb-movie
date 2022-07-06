import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MovieList from "./containers/MovieList";
import theme from "./themes/theme";
import { Box } from "@mui/system";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route
            path="indonesian"
            element={<Box sx={{ mt: 10 }}>Halaman Indonesian</Box>}
          />
          <Route
            path="pricing"
            element={<Box sx={{ mt: 10 }}>Halaman Pricing</Box>}
          />
          <Route
            path="about"
            element={<Box sx={{ mt: 10 }}>Halaman About</Box>}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
