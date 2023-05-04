import React from "react";
import "./Weather.css";
import Top from "./Top.js";

export default function Weather() {
  return (
    <>
      <div className="Weather">
        <Top />
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />{" "}
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="city">
          <h2>Kyiv</h2>
          <ul>
            <li>Saturday 20:30</li>
            <li>Clouds</li>
          </ul>
        </div>
        <div class="row">
          <div class="col-6">
            <span className="temperature">🌥️</span>
            <span>17</span>
            <span>°C </span>
            <span>°F </span>
          </div>

          <div className="col-6">
            <ul>
              <li>
                Precipitation: <span>98</span>%
              </li>
              <li>
                Wind: <span>5</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
