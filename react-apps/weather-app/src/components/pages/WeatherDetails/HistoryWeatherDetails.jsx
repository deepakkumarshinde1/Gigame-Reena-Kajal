import React from "react";
import { useParams } from "react-router-dom";

function HistoryWeatherDetails() {
  let { id } = useParams();
  return <div>HistoryWeatherDetails {id}</div>;
}

export default HistoryWeatherDetails;
