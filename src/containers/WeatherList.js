import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/WeatherActions';

import DayTime from '../components/DayTime';


class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.fetchWeather(this.props.latitude, this.props.longitude);
  }

  render() {
    if (!this.props.weatherData.fetching) {
      return <p className="fa fa-spinner fa-spin fa-2x loading"></p>;
    }

    let { name, weather } = this.props.weatherData.weather;
    let { speed } = this.props.weatherData.weather.wind;
    let { humidity, temp } = this.props.weatherData.weather.main;
    let id = weather.map((item) => item.id);
    let description = weather.map((item) => item.description);
    let cTemp = (temp - 273.15);

    return (
      <div className="weather-container">
        <h2 className="city-name">{name}</h2>
        <div className="weather-items">
          <div className="weather-item1">
            <DayTime />
            <p className="windspeed">Wind {speed}m/s</p>
            <p className="humidity"><i className="fa fa-tint"></i> {humidity}%</p>
          </div>
          <div className="weather-item2">
            <i className={`owf owf-3x owf-${id}`}></i>
            <p className="description">{description}</p>
          </div>
          <div className="weather-item3">
            <p className="temp">{cTemp}&#8451;</p>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    fetchWeather 
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
