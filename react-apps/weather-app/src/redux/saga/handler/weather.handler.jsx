import { call, put } from "redux-saga/effects";
import { getWeatherDataService } from "../service/weather.service";
import { saveWeatherData } from "../../slices/weather.slice";

export function* getWeatherDataHandler(action) {
  try {
    let { data } = yield call(getWeatherDataService, action.payload);
    console.log(data);
    yield put(saveWeatherData(data));
  } catch (error) {
    alert("Something went wrong.");
  }
}
