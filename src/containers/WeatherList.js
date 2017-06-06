import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class WeatherList extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    // this.props.fetchWeather();
  }
  render() {
    return (
      <div>
        <h1>aa</h1>
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
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
