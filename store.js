import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  nextKey: 'c',
  alreadyTyped: '',
  text: 'console.log()'
}

const reducer = (state = initialState, action) => {
  return state
}

export const initStore = () => {
  return createStore(reducer, initialState, composeWithDevTools)
}
