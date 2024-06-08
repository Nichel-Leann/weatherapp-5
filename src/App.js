import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1> Weather App</h1>

      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/Nichel-Leann"
          target="_blank"
          rel="noreferrer"
        >
          Nichelleann Richards
        </a>
        , is{" "}
        <a
          href="https://github.com/Nichel-Leann/Weatherapp-SheCodes"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        <br />
        and
        <a
          href="https://easyshecodesweatherapp.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          hosted on Netlify.
        </a>
      </footer>
    </div>
  );
}
