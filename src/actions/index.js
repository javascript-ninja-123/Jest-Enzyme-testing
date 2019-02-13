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

/**
 * @function
 * @returns {object} 
 */
export const failTodo = (err) => (
    {
        type:Todo.FAILED_TO_ADD_TODO,
        payload:err
    }
)