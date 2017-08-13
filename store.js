import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const actionTypes = {
  RECORD: 'RECORD'
}

const exampleInitialState = {
  nextKey: 'c',
  alreadyTyped: '',
  text: 'console.log()'
}

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.RECORD:
      return Object.assign({}, state, {
        alreadyTyped: state.alreadyTyped + action.key
      })
    default:
      return state
  }
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const recordKey = (key) => (dispatch) => {
  return dispatch({
    type: actionTypes.RECORD,
    key: key
  })
}
