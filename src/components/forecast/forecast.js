import { useState } from "react";
import "./forecast.css";

const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let currentDay = new Date().getDay();
var forecastDay = WEEKDAYS.slice(currentDay, WEEKDAYS.length).concat(
  WEEKDAYS.slice(0, currentDay)
);

const Forecast = ({ forecastDetails }) => {
  const [drop, setDrop] = useState(false);
  const toggleDropDown = (e) => {
    console.log(e.target)
    setDrop(!drop);
  };
  //.list[0].weather.description
  const ForecastDetails = ({
    pressure,
    clouds,
    seaLevel,
    humidity,
    dayWeather,
    windspeed,
    tempFeels,
  }) => {
    //console.log(dayWeather)

    return (
      <div className="forecast-details">
      
        <div className="box-1">
          <div className="cont">
            <p>pressure</p>
            <span>{pressure}</span>
          </div>
          <div className="cont">
            <p>clouds</p>
            <span>{clouds}</span>
          </div>
          <div className="cont">
            <p>see level</p>
            <span>{seaLevel}</span>
          </div>
        </div>
        <div className="box-2">
          <div className="cont">
            <p>humidity</p>
            <span>{humidity}</span>
          </div>
          <div className="cont">
            <p>Wind Speed</p>
            <span>{windspeed}</span>
          </div>
          <div className="cont">
            <p>Feels</p>
            <span>{tempFeels}</span>
          </div>
        </div>
      </div>
    );
  };

  return forecastDetails.list.splice(0, 7).map((dayWeather, i) => {
    let icon = dayWeather.weather[0].icon;
    let descr = dayWeather.weather[0].description;
    let tempMin = dayWeather.main.temp_min;
    let tempMax = dayWeather.main.temp_max;
    let pressure = dayWeather.main.pressure;
    let clouds = dayWeather.clouds.all;
    let seaLevel = dayWeather.main.sea_level;
    let humidity = dayWeather.main.humidity;
    let windspeed = dayWeather.wind.speed;
    let tempFeels = dayWeather.main.feels_like;

    return (
      <div key={dayWeather.dt} onClick={toggleDropDown} >
        <div className="forecast-tab">
          <div className="icon-day">
            <img
              alt="weather-icon"
              src={`icons/${icon}.png`}
              className="weather-icon"
            ></img>
            <p>{forecastDay[i]}</p>
          </div>
          <div className="details-temp">
            <p>{descr}</p>
            <p>
              {Math.round(tempMin)}/{Math.round(tempMax)}
            </p>
          </div>
        </div>
        {drop && (
          <ForecastDetails
            forecastDetails={{
              pressure,
              clouds,
              seaLevel,
              humidity,
              dayWeather,
              windspeed,
              tempFeels,
            }}
          />
        )}
      </div>
    );
  });
};

export default Forecast;
