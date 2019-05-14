import axios from 'axios';
import { FETCH_USER, FETCH_ABOUT, FETCH_RECENT_POST, FETCH_PAST_THREE, FETCH_COMMENTS_NEEDING_REVIEW } from './types';

export const fetchUser = () => async dispatch => {
   const res = await axios.get('/api/current_user');
       dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchRecentPost = () => async dispatch => {
    const res = await axios.get('/api/posts/recent');
        dispatch({ type: FETCH_RECENT_POST, payload: res.data });
 };

 export const fetchPastThree = () => async dispatch => {
    const res = await axios.get('/api/posts/recent/topthree');
        dispatch({ type: FETCH_PAST_THREE, payload: res.data });
 };

 export const fetchCommentsNeedingReview = () => async dispatch => {
    const res = await axios.get('/api/comment/not_verified');
        dispatch({ type: FETCH_COMMENTS_NEEDING_REVIEW, payload: res.data });
 };

 export const fetchAbout = () => async dispatch => {
    const res = await axios.get('/api/about/about');
        dispatch({ type: FETCH_ABOUT, payload: res.data });
 };