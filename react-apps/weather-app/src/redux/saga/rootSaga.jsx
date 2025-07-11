import { all } from "redux-saga/effects";
import { getWeatherDataWatcher } from "./watcher/weather.watcher";

export function* rootSaga() {
  let watchers = [getWeatherDataWatcher()];
  yield all(watchers);
}
