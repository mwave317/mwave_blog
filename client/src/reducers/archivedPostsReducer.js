import { FETCH_ARCHIVED_POSTS } from '../actions/types';


export default function (state = [], action) {
    switch(action.type) {
        case FETCH_ARCHIVED_POSTS: 
          return action.payload;
        default: 
            return state;
    }
}