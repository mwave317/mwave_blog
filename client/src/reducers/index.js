import {combineReducers } from 'redux';
import authReducer from './authReducer';
import recentReducer from './recentReducer';
import recentPostCommentsReducer from './recentPostCommentsReducer'
import pastThreeReducer from './pastThreeReducer';
import commentsNeedingReviewReducer from './commentsNeedingReviewReducer';
import aboutReducer from './aboutReducer';

export default combineReducers({
    auth: authReducer,
    recent: recentReducer,
    pastThree: pastThreeReducer,
    review: commentsNeedingReviewReducer,
    about: aboutReducer,
    recentComments: recentPostCommentsReducer,
});