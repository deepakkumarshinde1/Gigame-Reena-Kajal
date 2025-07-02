import { createSlice } from "@reduxjs/toolkit";

const WeatherSlice = createSlice({
  name: "WeatherSlice",
  initialState: {
    cityName: "",
    weatherDetail: null,
  },
  reducers: {
    handelInput(state, action) {
      let value = action.payload;
      state.cityName = value;
    },
    saveRecord(state, action) {
      state.weatherDetail = action.payload;
    },
  },
});

export default WeatherSlice;
export const { handelInput, saveRecord } = WeatherSlice.actions;
