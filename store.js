import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const actionTypes = {
  RECORD: 'RECORD'
}

const exampleInitialState = {
  characters: [{
    key: 'c',
  }, {
    key: 'o',
  },{
    key: 'n',
  },{
    key: 's',
  },{
    key: 'o',
  },{
    key: 'l',
  },{
    key: 'e',
  },{
    key: '.',
  },{
    key: 'l',
  },{
    key: 'o',
  },{
    key: 'g',
  },{
    key: '(',
  },{
    key: ')',
  }],
  currentIndex: 1
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
