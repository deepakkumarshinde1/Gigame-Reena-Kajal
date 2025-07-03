import { createSlice } from "@reduxjs/toolkit";
import { getWeatherData } from "../service/api";

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state, action) => {
        state.weatherDetail = null;
        state.loading = true;
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.weatherDetail = action.payload;
        state.loading = false;
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.weatherDetail = null;
        alert("Server Error");
        state.loading = false;
      });
  },
});

export default WeatherSlice;
export const { handelInput } = WeatherSlice.actions;
