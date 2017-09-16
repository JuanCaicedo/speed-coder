import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import initialText from '../data/gist'
import { initCharacter } from '../components/character'
import reducer from './reducers'

const exampleInitialState = {
  characters: initialText.map(initCharacter),
  currentIndex: 0,
}

export const initStore = () => {
  return createStore(
    reducer,
    exampleInitialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
