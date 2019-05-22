import {combineReducers } from 'redux';
import authReducer from './authReducer';
import recentReducer from './recentReducer';
import postCommentsReducer from './postCommentsReducer'
import pastThreeReducer from './pastThreeReducer';
import pastPostReducer from './pastPostReducer';
import commentsNeedingReviewReducer from './commentsNeedingReviewReducer';
import repliesNeedingReviewReducer from './repliesNeedingReviewReducer';
import aboutReducer from './aboutReducer';

export default combineReducers({
    auth: authReducer,
    recent: recentReducer,
    pastThree: pastThreeReducer,
    past: pastPostReducer,
    review: commentsNeedingReviewReducer,
    reviewReplies: repliesNeedingReviewReducer,
    about: aboutReducer,
    comments: postCommentsReducer,
});