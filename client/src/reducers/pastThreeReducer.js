import { FETCH_PAST_THREE } from '../actions/types';


export default function (state = [], action) {
    console.log('This is the action being called', action.payload);
    switch(action.type) {
        case FETCH_PAST_THREE: 
          return action.payload;
        default: 
            return state;
    }
}