/*
 * --------------------------------------------------------------------
 * Project: SK2
 * Version: 0.1.1
 * File: WeatherTable.js
 * Created: Tuesday, 6th October 2020 4:22:40 pm
 * Modified: Tuesday, 6th October 2020 4:47:07 pm
 * Author: Shahrom Azmi Nazeer (shahrom@scs.my)
 *
 * Copyright (C) 2020 - System Consultancy Services Sdn. Bhd.
 * --------------------------------------------------------------------
 */

import React, { isValidElement } from "react";

function WeatherTable(props) {
  return (
    <div>
      <br />
      <h5>Weather Forecast (7 Days)</h5>
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Weather</th>
            <th scope="col">Date</th>
            <th scope="col">Temperature</th>
          </tr>
        </thead>
        <tbody>
          {props.weathers.map((val, index) => {
            return (
              <tr key={index} onClick={() => props.handleRowClick(val)}>
                <td>{index + 1}</td>
                <td>
                  <div>
                    <img
                      style={{ width: 50 }}
                      src={`https://openweathermap.org/img/wn/${val.weather[0].icon}@2x.png`}
                    />
                    {val.weather[0].main}
                  </div>
                </td>
                <td>{new Date(val.dt * 1000).toDateString()}</td>
                <td>{(val.temp.day - 273.15).toFixed(0)} &deg; C</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default WeatherTable;
