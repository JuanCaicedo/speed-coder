import R from 'ramda'
import { combineReducers } from 'redux'
import initialText from '../../data/gist'
import { initCharacter } from '../../components/character'
import {
  getCurrentIndex,
  getCharacters,
  getCurrentCharacter,
  getCorrectCharacter,
} from '../selectors'

const isEnter = R.equals('Enter')
const isNewline = R.equals('\n')
const isSpace = R.equals(' ')
const getCharacter = R.path(['character'])

const keysAreEqual = (key1, key2) =>
  (isEnter(key1) && isNewline(key2)) || R.equals(key1, key2)

const setUpCharacters = R.map(initCharacter)
const lastIsNewline = R.pipe(R.last, getCharacter, isNewline)

export const removeInitialSpaces = (previous, character) => {
  if (R.isEmpty(previous) && isSpace(character.character)) {
    return previous
  }
  return previous.concat(character)
}

const removeInitialSpacesRight = (previous, character) => {
  if (lastIsNewline(previous) && isSpace(character.character)) {
    return previous
  }
  return previous.concat(character)
}

export const nextNonSpaceIndex = (characters, currentIndex) => {
  const remaining = characters.slice(currentIndex + 1)
  const noInitalSpaces = R.reduce(removeInitialSpaces, [], remaining)
  const firstCharacter = R.head(noInitalSpaces)
  return R.indexOf(firstCharacter, characters)
}

export const previousNonSpaceIndex = (characters, currentIndex) => {
  const remaining = characters.slice(0, currentIndex)
  const noInitalSpaces = R.reduce(removeInitialSpacesRight, [], remaining)
  const lastCharacter = R.last(noInitalSpaces)
  return R.lastIndexOf(lastCharacter, characters)
}

export const getNextIndex = (characters, currentIndex) => {
  const currentCharacter = characters[currentIndex]
  if (isNewline(currentCharacter.character)) {
    return nextNonSpaceIndex(characters, currentIndex)
  }
  return currentIndex + 1
}

export const addCharacter = (characters, key, currentIndex) => {
  const character = characters[currentIndex].character
  const status = keysAreEqual(key, character) ? 'correct' : 'incorrect'

  const newChar = {
    character,
    status,
  }
  return R.update(currentIndex, newChar, characters)
}

const initialCharacters = setUpCharacters(initialText)
export const characters = (state = initialCharacters, action) => {
  switch (action.type) {
    case 'RECORD': {
      const characters = action.characters
      return addCharacter(action.characters, action.key, action.currentIndex)
    }
    case 'UPDATE_SNIPPET': {
      const { snippet } = action
      return setUpCharacters(snippet)
    }
    case 'BACKSPACE': {
      const { currentIndex } = action
      const newChar = R.omit(['status'], R.path([currentIndex], state))
      return R.update(currentIndex, newChar, state)
    }
    default:
      return state
  }
}

export const currentIndex = (state = 0, action) => {
  switch (action.type) {
    case 'RECORD': {
      const characters = action.characters
      const currentIndex = action.currentIndex
      return getNextIndex(characters, currentIndex)
    }
    case 'UPDATE_SNIPPET':
      return 0
    case 'BACKSPACE': {
      const characters = action.characters
      return previousNonSpaceIndex(characters, state)
    }
    default:
      return state
  }
}

const startTime = (state = 0, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return action.startTime
    default:
      return state
  }
}

const endTime = (state = 0, action) => {
  switch (action.type) {
    case 'END_TIMER':
      return action.endTime
    default:
      return state
  }
}

const reducer = combineReducers({
  characters,
  currentIndex,
  startTime,
  endTime,
})

export default reducer
