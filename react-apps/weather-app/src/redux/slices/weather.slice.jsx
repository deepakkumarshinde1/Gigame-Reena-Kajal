import { createSlice } from "@reduxjs/toolkit";

const WeatherSlice = createSlice({
  name: "WeatherSlice",
  initialState: {
    cityName: "",
    weatherDetail: null,
    loading: false,
  },
  reducers: {
    handelInput(state, action) {
      let value = action.payload;
      state.cityName = value;
    },
    getWeatherData() {},
    saveWeatherData(state, action) {
      state.weatherDetail = action.payload;
      state.loading = false;
    },
  },
});

export default WeatherSlice;
export const { handelInput, saveWeatherData, getWeatherData } =
  WeatherSlice.actions;
