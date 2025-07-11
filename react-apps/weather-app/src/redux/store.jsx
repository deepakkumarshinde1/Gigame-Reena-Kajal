import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/counter.slice";
import WeatherSlice from "./slices/weather.slice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

let store = configureStore({
  reducer: {
    myCounter: CounterSlice.reducer,
    weather: WeatherSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
