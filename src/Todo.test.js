import React from 'react';
import Todo from './Todo'
import {mount} from 'enzyme'
import {findByTestAttr,storeFactory,UnWrapConnectedComponent} from './util';
import {Provider} from 'react-redux';
import {addTodo, failTodo} from './actions'
let store;
const setup = (props = {}) => {
     store = storeFactory(props)
    const wrapper = mount(  
        <Provider store={store}>
           <Todo/>
        </Provider>
    )
    return UnWrapConnectedComponent(wrapper, Todo);
}


describe("test Todo Connected Component", () => {
let wrapper;
beforeEach(() => {
    wrapper = setup({})
})

test("state list is equal to emtpy string", () => {
    expect(wrapper.state("list")).toBe('')
})

test("update state from onChange", () => {
    const newText = 'eat food';
    const input = findByTestAttr(wrapper, 'input')
    const event = {target: {name: "list", value: newText}};
    input.simulate("change",event)
    wrapper.update();
    expect(wrapper.state('list')).toBe(newText)
})

test("reset the input when a user clicks a button", () => {
    const newText = 'eat food';
    const input = findByTestAttr(wrapper, 'input')
    const event = {target: {name: "list", value: newText}};
    input.simulate("change",event)

    const button = findByTestAttr(wrapper, 'button')
    button.simulate('click')
    wrapper.update();
    const {array} = store.getState().todo
    expect(wrapper.state("list")).toBe("")
    expect(array).toEqual([newText])
    expect(wrapper.instance().props.array).toEqual([newText])
})

test("was not able to add todo", () => {
    const error = "it failed so bad"
    store.dispatch(failTodo(error))
    expect(wrapper.instance().props.error).toEqual(error)
})
})