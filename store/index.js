import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import initialText from '../data/gist'
import { initCharacter } from '../components/character'
import reducer from './reducers'

const actionTypes = {
  RECORD: 'RECORD'
}

const exampleInitialState = {
  characters: initialText.map(initCharacter),
  currentIndex: 1
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
