import {Todo} from '../actions/type';
import TodoReducer, {Initial_State} from './todo_reducer';
import deepFreeze from 'deep-freeze';

deepFreeze(Initial_State)

describe("test todo reducer", () => {
    test("accept Todo.AddTODO", () => {
        const text = "what is up brother"
        const action = {type:Todo.ADD_TODO,payload:text}
        deepFreeze(action)
        const newState = TodoReducer(Initial_State,action)
        expect(newState).toEqual({...Initial_State, array:[text]})
    })
})