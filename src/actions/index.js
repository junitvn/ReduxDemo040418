import {INCREASE, DECREASE} from './types';

export const counterIncrease = (counter) => {
    return{
        type: INCREASE,
        counter,
    }
};
export const counterDecrease = (counter) => {
    return {
        type: DECREASE,
        counter 
    }
}
