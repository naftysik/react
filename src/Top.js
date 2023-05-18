import React, { useState } from "react";
import "./Top.css";

export default function Top(props) {
  const [selectedCity, setSelectedCity] = useState(null);

  function showWeather(event) {
    event.preventDefault();

    let city = event.target.name;
    setSelectedCity(city);
    props.setCity(city);
  }

  let cities = ["Warsaw", "Paris", "London", "Kyiv"];
  return (
    <div className="Top">
      <div className="row">
        {cities.map(function (cityName, index) {
          return (
            <div className="col" key={index}>
              <div className="col city">
                <a
                  href="#"
                  className={
                    selectedCity === cityName
                      ? "up-city-link active"
                      : "up-city-link"
                  }
                  onClick={showWeather}
                  name={cityName}
                >
                  {cityName}
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
}
