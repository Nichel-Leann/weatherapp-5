import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
