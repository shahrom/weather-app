/*
 * --------------------------------------------------------------------
 * Project: SK2
 * Version: 0.1.1
 * File: WeatherSearch.js
 * Created: Tuesday, 6th October 2020 4:21:46 pm
 * Modified: Tuesday, 6th October 2020 4:46:37 pm
 * Author: Shahrom Azmi Nazeer (shahrom@scs.my)
 *
 * Copyright (C) 2020 - System Consultancy Services Sdn. Bhd.
 * --------------------------------------------------------------------
 */

import React from "react";

class WeatherSearch extends React.Component {
  constructor(props) {
    super();
    this.state = {
      location: "",
    };
  }

  handleSearch = (e) => {
    var val = e.target.value;
    this.props.handleSearch(val);
  };

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      location: value,
    });
  };

  // getWeather = async (location) => {
  //   const api_call = await fetch(
  //     "http://api.openweathermap.org/data/2.5/weather?q=" +
  //       location +
  //       "&appid=9fd7a449d055dba26a982a3220f32aa2"
  //   );

  //   const response = await api_call.json();

  //   alert(response.weather[0].id);
  // };

  render() {
    return (
      <div>
        <br />
        <div className="input-group mb-3">
          <input
            onChange={this.handleChange}
            type="text"
            className="form-control"
            placeholder="Enter Location"
          />
          <div className="input-group-append">
            <button
              onClick={this.handleSearch}
              value={this.state.location}
              className="btn btn-primary"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherSearch;
