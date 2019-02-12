import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()})

 /** 
   * 
   * @function setup
   * @param {object} props
   * @param {object} state
   * @returns {ShallowWrapper}
  */
 
 const setup = (props ={}, state={}) => {
  const wrapper = shallow(<App {...props}/>)
  wrapper.setState(state)
  return wrapper
}

/**
 * 
 * @param {ShallowWrapper} wrapper 
 * @param {string} val 
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper,val) => {
  return wrapper.find({'data-test': val})
}

test("renders <App/>", () => {
  const wrapper = setup()
  expect(wrapper.length).toBe(1)
})
test("has a p", () => {
  const wrapper = setup()
  const text = findByTestAttr(wrapper, 'title')
  expect(text.exists()).toEqual(true)
})

test("state count at 0", () => {
  const wrapper = setup();
  expect(wrapper.state().count).toEqual(0)
})

test("click button increment counter display", () => {
  const wrapper = setup({}, {count:0});
  const button = findByTestAttr(wrapper, "button")
  button.simulate('click')
  wrapper.update();
  expect(wrapper.state().count).toEqual(1) 
})

test("click a button to decrement counter display ", () => {
  const wrapper = setup({}, {count:1});
  const button = findByTestAttr(wrapper, "decbutton")
  button.simulate('click')
  wrapper.update();
  expect(wrapper.state().count).toEqual(0)
})
