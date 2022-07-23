import { useState } from "react";
import "./forecast.css";

const Forecast = ({ forecastDetails }) => {
  const [drop, setDrop] = useState(false);
  console.log(forecastDetails.list);
  const toggleDropDown = () => {
    setDrop(!drop);
  };
//.list[0].weather.description
  const ForecastDetails = ({otherDetails}) => {
 

    //console.log(dayWeather)

    // return (
    //   <div className="forecast-details">
    //     <div className="box-1">
    //       <div className="cont">
    //         <p>pressure</p>
    //         <span>{pressure}</span>
    //       </div>
    //       <div className="cont">
    //         <p>clouds</p>
    //         <span>{clouds}</span>
    //       </div>
    //       <div className="cont">
    //         <p>see level</p>
    //         <span>{seaLevel}</span>
    //       </div>
    //     </div>
    //     <div className="box-2">
    //       <div className="cont">
    //         <p>{humidity}</p>
    //         <span>24</span>
    //       </div>
    //       <div className="cont">
    //         <p>Wind Speed</p>
    //         <span>{windspeed}</span>
    //       </div>
    //       <div className="cont">
    //         <p>Feels</p>
    //         <span>{tempFeels}</span>
    //       </div>
    //     </div>
    //   </div>
    // );
  };

  return forecastDetails.list.map((dayWeather) => {
    let icon = dayWeather.weather[0].icon;
    let day = "Monday";
    let descr = dayWeather.weather[0].description;
    let tempMin = dayWeather.main.temp_min;
    let tempMax = dayWeather.main.temp_max;

    let otherDetails = {
        pressure : dayWeather.main.pressure,
        clouds : dayWeather.clouds.all,
        seaLevel : dayWeather.main.sea_level,
        humidity : dayWeather.main.humidity,
        windspeed : dayWeather.wind.speed,
        tempFeels : dayWeather.main.feels_like
    }
    
    console.log(dayWeather)
    return (
      <div onClick={toggleDropDown} key={dayWeather.dt}>
        <div className="forecast-tab">
          <div className="icon-day">
            <img
              alt="weather-icon"
              src={`icons/${icon}.png`}
              className="weather-icon"
            ></img>
            <p>{day}</p>
          </div>
          <div className="details-temp">
            <p>{descr}</p>
            <p>
              {Math.round(tempMin)}/{Math.round(tempMax)}
            </p>
          </div>
        </div>
        {false && <ForecastDetails forecastDetails={{...otherDetails}} />}
      </div>
    );
  });
};

export default Forecast;
