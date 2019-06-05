import {combineReducers } from 'redux';
import authReducer from './authReducer';
import recentReducer from './recentReducer';
import postCommentsReducer from './postCommentsReducer'
import pastThreeReducer from './pastThreeReducer';
import pastPostReducer from './pastPostReducer';
import archivedPostsReducer from './archivedPostsReducer';
import commentsNeedingReviewReducer from './commentsNeedingReviewReducer';
import repliesNeedingReviewReducer from './repliesNeedingReviewReducer';
import aboutReducer from './aboutReducer';

export default combineReducers({
    auth: authReducer,
    recent: recentReducer,
    pastThree: pastThreeReducer,
    past: pastPostReducer,
    archived: archivedPostsReducer,
    reviewComments: commentsNeedingReviewReducer,
    reviewReplies: repliesNeedingReviewReducer,
    about: aboutReducer,
    comments: postCommentsReducer,
});