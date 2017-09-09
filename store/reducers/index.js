import R from 'ramda'
import {
  getCurrentIndex,
  getCharacters,
  getCurrentCharacter,
  getCorrectCharacter,
} from '../selectors'

const equal = (key1, key2) => {
  if (key1 === 'Enter' && key2 === '\n') {
    return true
  }
  return key1 === key2
}

export const removeInitialSpaces = (previous, character) => {
  if (R.equals(previous, []) && R.equals(character.character, ' ')) {
    return previous
  }
  return previous.concat(character)
}

export const nextNonSpaceIndex = (characters, currentIndex) => {
  const remaining = characters.slice(currentIndex + 1)
  const noInitalSpaces = remaining.reduce(removeInitialSpaces, [])
  return characters.indexOf(noInitalSpaces[0])
}

export const getNextIndex = state => {
  const currentCharacter = getCurrentCharacter(state)
  const currentIndex = getCurrentIndex(state)
  const characters = getCharacters(state)

  if (currentCharacter.character === '\n') {
    return nextNonSpaceIndex(characters, currentIndex)
  }
  return getCurrentIndex(state) + 1
}

export const addCharacter = (state, action) => {
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
    ...characters.slice(currentIndex + 1),
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'RECORD':
      return {
        ...state,
        currentIndex: getNextIndex(state),
        characters: addCharacter(state, action),
      }
    case 'START_TIMER':
      return {
        ...state,
        startTime: action.startTime,
      }
    case 'END_TIMER':
      return {
        ...state,
        endTime: action.endTime,
      }
    default:
      return state
  }
}

export default reducer
