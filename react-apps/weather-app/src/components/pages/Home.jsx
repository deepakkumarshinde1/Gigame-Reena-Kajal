import { useDispatch, useSelector } from "react-redux";
import { getWeatherData, handelInput } from "../../redux/slices/weather.slice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { cityName, weatherDetail } = useSelector((state) => state.weather);
  useEffect(() => {
    if (weatherDetail !== null) {
      navigate("/recent-weather-details");
    }
  }, [weatherDetail]);
  return (
    <div>
      <input
        type="text"
        onChange={(event) => dispatch(handelInput(event.target.value))}
        value={cityName}
      />
      <button onClick={() => dispatch(getWeatherData(cityName))}>Search</button>
    </div>
  );
}

export default Home;
