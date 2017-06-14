import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.latitude)
    this.props.fetchWeather(this.props.latitude, this.props.longitude);
  }
  render() {
    let date = new Date();
    function getWeekDay(date) {
      let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        return days[date.getDay()];
    }
    let daynow = date.getDate() + '/' + '0' + (date.getMonth() + 1)  + '/' + date.getFullYear();

    let { name } = this.props.weatherData.weather;
    let wind  = this.props.weatherData.weather.wind.speed;
    return (
      <div className="weather-container">
        <h2 className="city-name">{name}</h2>
        <p className="weekday">{getWeekDay(date)}</p>
        <p className="daynow">{daynow}</p>
        <p>Wind {wind} m/s</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weatherData: state.weatherData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    fetchWeather 
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
