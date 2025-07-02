import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/pages/Header";
import Home from "./components/pages/home";
import WeatherDetails from "./components/pages/WeatherDetails/WeatherDetails";
import WeatherHistory from "./components/pages/WeatherHistory";
import PageNotFound from "./components/pages/PageNotFound";
import RecentWeatherDetails from "./components/pages/WeatherDetails/RecentWeatherDetails";
import HistoryWeatherDetails from "./components/pages/WeatherDetails/HistoryWeatherDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent-weather-details" element={<WeatherDetails />}>
          <Route path="" element={<RecentWeatherDetails />} />
          <Route path=":id" element={<HistoryWeatherDetails />} />
        </Route>
        <Route path="/view-history" element={<WeatherHistory />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
