import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handelInput, saveRecord } from "../../redux/slices/weather.slice";
import { useNavigate } from "react-router-dom";
let API_KEY = "338d7049189196fba6402362a0f256f2";
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/";
function Home() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { cityName } = useSelector((state) => state.weather);
  let getWeatherData = async () => {
    let url = `weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    let { data } = await axios.get(url);
    dispatch(saveRecord(data));
    navigate("/recent-weather-details");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(event) => dispatch(handelInput(event.target.value))}
        value={cityName}
      />
      <button onClick={getWeatherData}>Search</button>
    </div>
  );
}

export default Home;
