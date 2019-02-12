import {Todo} from '../actions/type';

export const Initial_State = {
    array:[],
    error:null
}
/**
 * @description A reducer function which returns a state with updated payloads
 * @function
 * @param {object} state
 * @param {string} type
 * @param {string | array} payload
 * @returns {object} immutable new state
 */
export default (state = Initial_State, action) => {
    switch (action.type){
        case Todo.ADD_TODO:
        return {...state, array:[...state.array, action.payload]}
        default:
        return state;
    }
}