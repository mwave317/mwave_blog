import { FETCH_COMMENTS_NEEDING_REVIEW } from '../actions/types';


export default function (state = [], action) {
    console.log('This is the action being called', action.payload);
    switch(action.type) {
        case FETCH_COMMENTS_NEEDING_REVIEW: 
          return action.payload;
        default: 
            return state;
    }
}