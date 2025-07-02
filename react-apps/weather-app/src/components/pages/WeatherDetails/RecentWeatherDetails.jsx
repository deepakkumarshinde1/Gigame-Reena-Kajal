import { useSelector } from "react-redux";

function RecentWeatherDetails() {
  let { weatherDetail } = useSelector((state) => state.weather);
  return (
    <div>
      {weatherDetail === null ? (
        <p>No Record To Show</p>
      ) : (
        <>
          <p>
            {weatherDetail.name} ({weatherDetail.sys.country})
          </p>
          <p>
            {weatherDetail.main.temp} <sup>o</sup>C
          </p>
        </>
      )}
    </div>
  );
}

export default RecentWeatherDetails;
