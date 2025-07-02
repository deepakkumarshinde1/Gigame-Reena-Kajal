import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/counter.slice";
import WeatherSlice from "./slices/weather.slice";

let store = configureStore({
  reducer: {
    myCounter: CounterSlice.reducer,
    weather: WeatherSlice.reducer,
  },
});

export default store;
