import axios from 'axios';
import { FETCH_USER, FETCH_RECENT_POST} from './types';

export const fetchUser = () => async dispatch => {
   const res = await axios.get('/api/current_user');
       dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchRecentPost = () => async dispatch => {
    const res = await axios.get('/api/posts/recent');
        dispatch({ type: FETCH_RECENT_POST, payload: res.data });
 };