const initialState = {
	fetching: false,
	weather: [],
	error: null
};

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_WEATHER_REQUEST': 
			return { 
				...state, 
				fetching: true 
			};
		case 'FETCH_WEATHER_SUCCESS':
			return { 
				...state, 
				fetching: false, 
				weather: action.payload 
			};
		case 'FETCH_WEATHER_FAILURE':
			return { 
				...state, 
				fetching: false,
				weather: action.payload 
			};
	default:
		return state;
	}
}

export default weatherReducer;