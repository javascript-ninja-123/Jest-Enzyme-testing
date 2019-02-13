import * as Action from './index'
import {Todo} from './type';

describe("correct action testing", () => {

    test("add todo action", () => { 
        const text = "what is up"
        const todoAction = Action.addTodo(text)
        expect(todoAction).toEqual({type:Todo.ADD_TODO, payload:text})
        expect(todoAction.type).toBe(Todo.ADD_TODO)
        expect(todoAction.payload).toBe(text)
    })


    test("fail todo", () => {
        const err = "it failed to add todo"
        const todoAction = Action.failTodo(err)
        expect(todoAction).toEqual({type:Todo.FAILED_TO_ADD_TODO, payload:err})
    })
})