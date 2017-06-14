import React from 'react';
import Header from '../containers/Header';
import WeatherList from '../containers/WeatherList';

import '../../style/App.css';


class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: ''
    }
    this.showPosition = this.showPosition.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
  
  showPosition(position) {
    this.setState({ 
      latitude: position.coords.latitude.toFixed(2),
      longitude: position.coords.longitude.toFixed(2) 
    })
  }

  componentWillMount() {
    this.getLocation();  
  }
  render() {
		let weatherList;
		if(this.state.latitude != '' && this.state.longitude != '') {
			weatherList = <WeatherList latitude={this.state.latitude} longitude={this.state.longitude} />
		} else {
			weatherList = null
			}
    return (
      <div>
				<Header />
				{weatherList}
      </div>
    );
  }
} 

export default App;