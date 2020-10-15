import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from "redux-thunk";

import { regionReducer, countryReducer } from "./reducer";

const reducer = combineReducers({
    regions: regionReducer,
    countries: countryReducer
})

const middleware = [thunk];
const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(...middleware))
)

export default store;