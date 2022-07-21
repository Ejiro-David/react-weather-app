import "./App.css";
import CurrentWeather from "./components/current weather/current-weather";
import Search from "./components/search/search";
import {WEATHER_API_URL} from './api'
import { useState } from "react";

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${'fc72690f1504d4a344dbace92452071c'}`)
    const forecastFetch = fetch(`${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${'fc72690f1504d4a344dbace92452071c'}`)


    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async(response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setCurrentWeather({city: searchData.label,  ...weatherResponse})
        setForecast({city: searchData.label,  ...forecastResponse}) 

      })
      .catch((err) => console.log(err))
  };

  console.log(currentWeather)
  console.log(forecast)

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
