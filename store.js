import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import initialText from './data/gist'
import { initCharacter } from './components/character'

const actionTypes = {
  RECORD: 'RECORD'
}

const exampleInitialState = {
  characters: initialText.map(initCharacter),
  currentIndex: 2
}

const increaseIndex = (index) => (index + 1)

const addCharacter = (characters, pressedKey, currentIndex) => (
  [
    ...characters.slice(0, currentIndex),
    {
      character: characters[currentIndex].character,
      wasCorrect: pressedKey === characters[currentIndex].key
    },
    ...characters.slice(currentIndex + 1)
  ]
)

const reducer = (state = exampleInitialState, action) => {
  const { characters, currentIndex } = state
  switch (action.type) {
    case actionTypes.RECORD:
      return {
        ...state,
        currentIndex: increaseIndex(currentIndex),
        characters: addCharacter(characters, action.key, currentIndex)
      }
    default:
      return state
  }
}

export const initStore = () => {
  return createStore(
    reducer,
    exampleInitialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const recordKey = (key) => (dispatch) => {
  return dispatch({
    type: actionTypes.RECORD,
    key: key
  })
}
