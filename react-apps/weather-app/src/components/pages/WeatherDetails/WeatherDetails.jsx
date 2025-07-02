import { Link, Outlet, useNavigate } from "react-router-dom";

function WeatherDetails() {
  let navigate = useNavigate();
  return (
    <>
      <Link to="/">Go to Home</Link>
      <button onClick={() => navigate("/view-history")}>History</button>
      <Outlet />
    </>
  );
}

export default WeatherDetails;
