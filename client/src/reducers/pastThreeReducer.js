import { FETCH_PAST_THREE } from '../actions/types';


export default function (state = [], action) {
    switch(action.type) {
        case FETCH_PAST_THREE: 
          return action.payload;
        default: 
            return state;
    }
}