import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import rootReducer from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(
			reduxPromise,
			thunk
		)
	)
);

export default store;