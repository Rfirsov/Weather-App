const API_KEY = '7f78e7bb16b1e3d99d7d42da1680842c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;


export const fetchWeather = (latitude, longitude) => {
const url = `${ROOT_URL}&lat=${latitude}&lon=${longitude}`;
	return dispatch => {
		dispatch(fetchWeatherRequest());
	fetch(url)
		.then((response) => response.json())
		.then((weather) => dispatch(fetchWeatherSuccess(weather)))
		.catch((error) => dispatch(fetchWeatherError("error loading"))) //eslint-disable-line
	}
}

function fetchWeatherRequest() {
	return {
		type: 'FETCH_WEATHER_REQUEST',
	}
}

function fetchWeatherSuccess(weather) {
	return {
		type: 'FETCH_WEATHER_SUCCESS',
		payload: weather
	}
}

function fetchWeatherError(error) {
	return {
		type: 'FETCH_WEATHER_FAILURE',
		payload: error
	}
}