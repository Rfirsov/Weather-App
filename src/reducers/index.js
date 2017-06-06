import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
	weatherData: weatherReducer
});

export default rootReducer;