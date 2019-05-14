import {combineReducers } from 'redux';
import authReducer from './authReducer';
import recentReducer from './recentReducer';
import pastThreeReducer from './pastThreeReducer';
import commentsNeedingReview from './commentsNeedingReview';

export default combineReducers({
    auth: authReducer,
    recent: recentReducer,
    pastThree: pastThreeReducer,
    review: commentsNeedingReview,
});