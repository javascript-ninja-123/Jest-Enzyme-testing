import {Todo} from './type';

/**
 * @function
 * @param {string} text 
 * @returns {object}
 */
export const addTodo = text => (
    {
        type:Todo.ADD_TODO,
        payload:text
    }
)