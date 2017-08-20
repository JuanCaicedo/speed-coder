import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const actionTypes = {
  RECORD: 'RECORD'
}

const exampleInitialState = {
  characters: [{
    key: 'c',
    wasCorrect: true
  }, {
    key: 'o',
    wasCorrect: false
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
  currentIndex: 2
}

const reducer = (state = exampleInitialState, action) => {
  const { characters, currentIndex } = state
  switch (action.type) {
    case actionTypes.RECORD:
      return {
        ...state,
        currentIndex: currentIndex + 1,
        characters: [
          ...characters.slice(0, currentIndex),
          {
            key: characters[currentIndex].key,
            wasCorrect: action.key === characters[currentIndex].key
          },
          ...characters.slice(currentIndex + 1)
        ]
      }
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
