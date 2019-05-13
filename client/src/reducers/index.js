import {combineReducers } from 'redux';
import authReducer from './authReducer';
import recentReducer from './recentReducer';

export default combineReducers({
    auth: authReducer,
    recent: recentReducer,
});