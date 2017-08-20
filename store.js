import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const actionTypes = {
  RECORD: 'RECORD'
}

const exampleInitialState = {
  characters: [{
    key: 'c',
    isCurrent: false
  }, {
    key: 'o',
    isCurrent: true
  },{
    key: 'n',
    isCurrent: false
  },{
    key: 's',
    isCurrent: false
  },{
    key: 'o',
    isCurrent: false
  },{
    key: 'l',
    isCurrent: false
  },{
    key: 'e',
    isCurrent: false
  },{
    key: '.',
    isCurrent: false
  },{
    key: 'l',
    isCurrent: false
  },{
    key: 'o',
    isCurrent: false
  },{
    key: 'g',
    isCurrent: false
  },{
    key: '(',
    isCurrent: false
  },{
    key: ')',
    isCurrent: false
  }]
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
