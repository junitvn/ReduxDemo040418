import {INCREASE,DECREASE} from '../actions/types';

const initialState = {
    counter : 0
}

export default counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
        console.log('..state',...state);
        console.log('action', action)   ;
             return  {
                 ...state,
                 counter : action.counter + 1
             }
            break;
        case DECREASE:
            return {
                ...state,
                counter : action.counter - 1
            }
            break;
    
        default:
        return state;
            break;
    }
}