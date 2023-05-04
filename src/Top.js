import React from "react";
import "./Top.css";

export default function Weather() {
  return (
    <div className="weather-app">
      <div className="row">
        <div className="col-3">Warsaw</div>
        <div className="col-2">Paris</div>
        <div className="col-2">London</div>
        <div className="col-2">Kyiv</div>
      </div>
    </div>
  );
}
