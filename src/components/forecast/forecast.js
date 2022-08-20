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

  //toggle dropdown inactive until i figure the bug out
  const toggleDropDown = (e) => {
    //e.preventDefault()
    console.log(e.target);
    setDrop(!drop);
  };

  const ExtraDetails = ({
    pressure,
    clouds,
    seaLevel,
    humidity,
    dayWeather,
    windspeed,
    tempFeels,
  }) => {
    console.log(dayWeather, pressure, clouds, seaLevel, humidity, dayWeather, windspeed, tempFeels)

    return (
      <div className="extra-details">
        <div className="box-1">
          <div className="cont">
            <p>pressure</p>
            <span>{9809}</span>
          </div>
          <div className="cont">
            <p>clouds</p>
            {/* number values here are place holders */}
            <span>{433}</span>
          </div>
          <div className="cont">
            <p>sea level</p>
            <span>{242}</span>
          </div>
        </div>
        <div className="box-2">
          <div className="cont">
            <p>humidity</p>
            <span>{546}</span>
          </div>
          <div className="cont">
            <p>Wind Speed</p>
            <span>{24}</span>
          </div>
          <div className="cont">
            <p>Feels</p>
            <span>{22}</span>
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

    console.log(icon, descr, tempMin, tempMax, pressure, clouds, seaLevel, humidity, windspeed, tempFeels, i)

    return (
      <div key={i} onClick>
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
              {`${Math.round(tempMin)}/${Math.round(tempMax)} °C`}
            </p>
          </div>
        </div>
        {drop && (
          <ExtraDetails
            forecastDetails={{
              pressure,
              clouds,
              seaLevel,
              humidity,
              dayWeather,
              windspeed,
              tempFeels
            }}
          />
        )}
      </div>
    );
  });
};

export default Forecast;
