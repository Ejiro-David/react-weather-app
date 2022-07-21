import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Benin</p>
          <p className="weather-description">Wet</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png"></img>
      </div>
      <div className="bottom">
        <p className="temp">99°C</p>
        <div className="details">
            <div className="row">
                <span className="label details-heading" id="">Details</span>
            </div>
            <div className="row">
                <span className="label">Humidity</span>
                <span className="value">Cali</span>
            </div>
            <div className="row">
                <span className="label">Feels Like</span>
                <span className="value">Hell</span>
            </div>
            <div className="row">
                <span className="label">Humidity</span>
                <span className="value">12</span>
            </div>
            <div className="row">
                <span className="label">Wind</span>
                <span className="value">4m/s</span>
            </div>
            <div className="row">
                <span className="label">Pressure</span>
                <span className="value">28mmHg</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
