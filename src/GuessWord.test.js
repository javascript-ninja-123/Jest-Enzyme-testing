import React from 'react';
import {shallow} from 'enzyme';
import GuessWord from './GuessWord';
import {findByTestAttr,workAroundForMemo} from './util'

const defaultProp = {words:[]}

/**
 * @function
 * @param {boject} props 
 * @returns {ShallowWrapper} 
 */
const setup = (props ={}) => {  
 const setupProp = {...defaultProp, ...props}
 const wrapper = shallow(<GuessWord {...setupProp}/>)
 return wrapper
}


describe("if there is no words", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({words:[]})
    })
    test("render loading when a words array is empty", () => {
        const text = findByTestAttr(wrapper, "loading")
        expect(text.text().length).not.toBe(0)
    })
})

describe("if there are words", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({words:[
            {
                id:1,
                name:"sung",
                email:"ssuyi@ucdavis.edu"
            },
            {
                id:2,
                name:"yonna zhong",
                email:"yhzhong@ucdavis.edu"
            }
        ]})
    })

    test("render a list with full of elements in array", () => {
        const list = findByTestAttr(wrapper, "list")
        expect(list.text().legnth).not.toBe(0)
    })
})


