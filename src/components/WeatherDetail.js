/*
 * --------------------------------------------------------------------
 * Project: SK2
 * Version: 0.1.1
 * File: WeatherDetail.js
 * Created: Tuesday, 6th October 2020 4:22:41 pm
 * Modified: Tuesday, 6th October 2020 4:47:00 pm
 * Author: Shahrom Azmi Nazeer (shahrom@scs.my)
 *
 * Copyright (C) 2020 - System Consultancy Services Sdn. Bhd.
 * --------------------------------------------------------------------
 */

import React from "react";

function WeatherDetail({ selectedDay }) {
  return (
    <div>
      <br />
      <h5>Weather Details</h5>
      <div className="card px-5 text-center">
        <div className="card-body">
          <h4 className="card-title">{new Date(selectedDay.dt * 1000).toDateString()}</h4>

          <p className="card-text">
            <img
              style={{ width: 50 }}
              src={`https://openweathermap.org/img/wn/${selectedDay.weather[0].icon}@2x.png`}
            />
            {selectedDay.weather[0].main}
          </p>
          <p className="card-text">
            {(selectedDay.temp.day - 273.15).toFixed(0)} &deg; C
          </p>
          <p className="card-text">{selectedDay.weather[0].description.toUpperCase()}</p>
          <p className="card-text">
            Sun Rise: {new Date(selectedDay.sunrise * 1000).toTimeString()}
          </p>
          <p className="card-text">
            Sun Set: {new Date(selectedDay.sunset * 1000).toTimeString()}
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default WeatherDetail;
