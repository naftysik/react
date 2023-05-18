import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    setLoaded(false);

    function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }

    function load() {
      let apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
    }

    if (props.coordinates) {
      load();
    }
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.slice(0, 5).map((dailyForecast, index) => (
            <div className="col" key={index}>
              <WeatherForecastDay data={dailyForecast} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
