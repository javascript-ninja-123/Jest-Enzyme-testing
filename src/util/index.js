import {createStore} from 'redux' 
import rootReducer from '../reducers'
/**
 * @function
 * @param {SHallowWrapper} wrapper 
 * @param {string} val 
 * @returns {SHallowWrapper} 
 */
export const findByTestAttr = (wrapper,val) => {
    return wrapper.find({'data-test': val})
  }


 /**
  * @function
  * @param {object} initialState 
  * @returns {Store} - redux store
  */ 
export const storeFactory = (initialState = {}) => {
 return createStore(rootReducer, initialState)
}


 /**
  * @function
  * @param {MountWrapper} root 
  * @param {MountWrapper} selectedComponent
  * @returns {MountWrapper}  
  */ 
export const UnWrapConnectedComponent = (root,wrapper) => {
  return root.find(wrapper).children()
}