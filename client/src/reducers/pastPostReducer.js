import { FETCH_PAST_POST } from '../actions/types';


export default function (state = [], action) {
    switch(action.type) {
        case FETCH_PAST_POST: 
          return action.payload;
        default: 
            return state;
    }
}