const API_KEY = 'd74df1ffd99a7afbff694c2a0c41530c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

const url = `${ROOT_URL}&q=london,us`;

export default function fetchWeather() {
	return dispatch => {
	dispatch(fetchWeatherRequest());
	fetch(url)
		.then((response) => {
			dispatch(fetchWeatherSuccess(response));
		})
		.catch((error) => {
			dispatch(fetchWeatherError(error))
		})
	}
}

function fetchWeatherRequest() {
	return {
		type: 'FETCH_WEATHER_REQUEST'
	}
}

function fetchWeatherSuccess(response) {
	return {
		type: 'FETCH_WEATHER_SUCCESS',
		payload: response
	}
}

function fetchWeatherError(error) {
	return {
		type: 'FETCH_WEATHER_ERROR',
		payload: error
	}
}