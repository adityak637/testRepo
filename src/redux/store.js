import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from '../views/App/reducer/reducer'


let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(AppReducer);

export default store;