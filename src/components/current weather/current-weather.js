import "./current-weather.css";

const CurrentWeather = ({weatherDetails}) => {

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{weatherDetails.city}</p>
          <p className="weather-description">{weatherDetails.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${weatherDetails.weather[0].icon}.png`}></img>
      </div>
      <div className="bottom">
        <p className="temp">{`${Math.round(weatherDetails.main.temp)}°C`}</p>
        <div className="details">
            <div className="row">
                <span className="label details-heading" id="">Details</span>
            </div>
            <div className="row">
                <span className="label">Humidity</span>
                <span className="value">{`${weatherDetails.main.humidity}%`}</span>
            </div>
            <div className="row">
                <span className="label">Feels Like</span>
                <span className="value">{`${Math.round(weatherDetails.main.feels_like)}°C`}</span>
            </div>
            <div className="row">
                <span className="label">Wind</span>
                <span className="value">{weatherDetails.wind.speed}m/s</span>
            </div>
            <div className="row">
                <span className="label">Pressure</span>
                <span className="value">{weatherDetails.main.pressure}hPa</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
