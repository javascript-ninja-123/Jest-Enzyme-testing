import React from 'react';
import {shallow} from 'enzyme';
import Jotta from './Jotta';
import {findByTestAttr} from './util'


const defaultProps = {success:true}
/**
 * @function
 * @param {object} props 
 * @param {object} state 
 * @returns {ShallowWrapper}
 */
const setup = (props ={}) => {
    const setupProps = {...defaultProps, ...props}
    const wrapper = shallow(<Jotta {...setupProps}/>)
    return wrapper
  }

test("render Jotta withour error", () => {
    const wrapper = setup({success:true})
    expect(wrapper.exists()).toEqual(true)
})  

test("succfsully accept a prop", () => {
    const wrapper = setup({success:true})
    const text = findByTestAttr(wrapper, "yes")
    expect(text.text().length).not.toBe(0)
})

test("succfsully accept a prop", () => {
    const wrapper = setup({success:false})
    const text = findByTestAttr(wrapper, "loading")
    expect(text.text().length).not.toBe(0)
})

test("render loading later", () => {
    const wrapper  = setup({success:false})
    const text = findByTestAttr(wrapper, "loading")
    expect(text.text().length).not.toBe(0)
})

