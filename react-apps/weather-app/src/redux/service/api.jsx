import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let API_KEY = "338d7049189196fba6402362a0f256f2";
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/";

export const getWeatherData = createAsyncThunk(
  "WeatherSlice/getWeatherData",
  async (cityName) => {
    let url = `weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    let { data } = await axios.get(url);
    return data;
  }
);
