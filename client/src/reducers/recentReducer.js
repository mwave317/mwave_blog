import { FETCH_RECENT_POST } from '../actions/types';


export default function (state = [], action) {
    console.log('This is the action being called', action.payload);
    switch(action.type) {
        case FETCH_RECENT_POST: 
          return action.payload;
        default: 
            return state;
    }
}