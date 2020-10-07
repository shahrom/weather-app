/*
 * --------------------------------------------------------------------
 * Project: SK2
 * Version: 0.1.1
 * File: Main.js
 * Created: Tuesday, 6th October 2020 4:19:27 pm
 * Modified: Tuesday, 6th October 2020 4:47:15 pm
 * Author: Shahrom Azmi Nazeer (shahrom@scs.my)
 *
 * Copyright (C) 2020 - System Consultancy Services Sdn. Bhd.
 * --------------------------------------------------------------------
 */

import React from "react";
import WeatherDetail from "./WeatherDetail";
import WeatherSearch from "./WeatherSearch";
import WeatherTable from "./WeatherTable";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      weathers: [],
      selectedDay: null,
    };
  }

  componentDidMount() {
    // this.fetchAPI("Kuala Lumpur");
  }

  handleSearch = (location) => {
    this.fetchAPI(location);
  };

  handleRowClick = (val) => {
    this.setState({
      selectedDay: val,
    });
  };

  // Using the back quote
  fetchAPI(location) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&appid=9782b24d506f53b56b45b8f288d37803`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          weathers: data["list"],
          selectedDay: null,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <WeatherSearch handleSearch={this.handleSearch} />

        {/* /// Conditional rendering */}
        {this.state.weathers ? (
          <WeatherTable
            weathers={this.state.weathers}
            handleRowClick={this.handleRowClick}
          />
        ) : (
          <div />
        )}

        {/* /// Conditional rendering */}
        {this.state.selectedDay ? (
          <WeatherDetail selectedDay={this.state.selectedDay} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Main;
