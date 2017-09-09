import R from 'ramda'
import {
  getCurrentIndex,
  getCharacters,
  getCurrentCharacter,
  getCorrectCharacter,
} from '../selectors'

const isEnter = R.equals('Enter')
const isNewline = R.equals('\n')
const isSpace = R.equals(' ')

const keysAreEqual = (key1, key2) =>
  (isEnter(key1) && isSpace(key2)) || R.equals(key1, key2)

export const removeInitialSpaces = (previous, character) => {
  if (R.isEmpty(previous) && isSpace(character.character)) {
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

  if (isNewline(currentCharacter.character)) {
    return nextNonSpaceIndex(characters, currentIndex)
  }
  return getCurrentIndex(state) + 1
}

export const addCharacter = (state, action) => {
  const characters = getCharacters(state)
  const currentIndex = getCurrentIndex(state)
  const pressedKey = action.key
  const character = getCorrectCharacter(state)
  const status = keysAreEqual(pressedKey, character) ? 'correct' : 'incorrect'

  const newChar = {
    character,
    status,
  }

  return R.update(currentIndex, newChar, characters)
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'RECORD':
      return R.merge(state, {
        currentIndex: getNextIndex(state),
        characters: addCharacter(state, action),
      })
    case 'START_TIMER':
      return R.merge(state, {
        startTime: action.startTime,
      })
    case 'END_TIMER':
      return R.merge(state, {
        endTime: action.endTime,
      })
    default:
      return state
  }
}

export default reducer
