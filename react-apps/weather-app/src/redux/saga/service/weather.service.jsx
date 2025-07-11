import axios from "axios";
let API_KEY = "338d7049189196fba6402362a0f256f2";
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/";

export function getWeatherDataService(city) {
  let url = `weather?q=${city}&appid=${API_KEY}&units=metric`;
  return axios.get(url);
}
