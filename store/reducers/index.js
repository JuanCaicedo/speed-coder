import {
  getCurrentIndex,
  getCharacters,
  getCurrentCharacter,
  getCorrectCharacter,
} from '../selectors';

const equal = (key1, key2) => {
  if (key1 === 'Enter' && key2 === '\n') {
    return true
  }
  return key1 === key2
}

const increaseIndex = (state) => getCurrentIndex(state) + 1

const addCharacter = (state, action) => {
  const characters = getCharacters(state)
  const currentIndex = getCurrentIndex(state)
  const pressedKey = action.key
  const correctCharacter = getCorrectCharacter(state)

  return [
    ...characters.slice(0, currentIndex),
    {
      character: correctCharacter,
      status: equal(pressedKey, correctCharacter) ? 'correct' : 'incorrect',
    },
    ...characters.slice(currentIndex + 1)
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'RECORD':
      return {
        ...state,
        currentIndex: increaseIndex(state),
        characters: addCharacter(state, action),
      }
    default:
      return state
    }
}

export default reducer
