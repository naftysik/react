import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nataly-tsalko-5a1440103//"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tsalko Natalka
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/naftysik/React-App-7745"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://rainbow-klepon-8d5d2b.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
