import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForcast-day"> Thur </div>
          <WeatherIcon code="01d" size={36} />

          <div className="WeatherForcast-temperatures">
            <span className="WeatherForcast-temperature-max">19°</span>
            <span className="WeatherForcast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
