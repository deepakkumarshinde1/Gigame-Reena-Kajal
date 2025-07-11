import { takeLatest } from "redux-saga/effects";
import { getWeatherData } from "../../slices/weather.slice";
import { getWeatherDataHandler } from "../handler/weather.handler";

export function* getWeatherDataWatcher() {
  yield takeLatest(getWeatherData.type, getWeatherDataHandler);
}
