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
				fetching: false
			};
		case 'FETCH_WEATHER_SUCCESS':
			return { 
				...state, 
				fetching: true, 
				weather: action.payload 
			};
		case 'FETCH_WEATHER_FAILURE':
			return { 
				...state, 
				fetching: true,
				error: action.payload
			};
	default:
		return state;
	}
}

export default weatherReducer;