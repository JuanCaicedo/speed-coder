import { createSelector } from 'reselect'
import R from 'ramda'

const isSpace = R.equals(' ')
const isNewline = R.equals('\n')
const getCharacter = R.prop('character')
const characterIsSpace = R.pipe(getCharacter, isSpace)
const getLastCharacter = R.pipe(R.last, getCharacter)
const lastCharacterIsNewLine = R.pipe(getLastCharacter, isNewline)

export const removeInitialSpaces = (previous, character) => {
  if (!previous && !characterIsSpace(character)) {
    return [character]
  }
  if (lastCharacterIsNewLine(previous) && characterIsSpace(character)) {
    return previous
  }
  return previous.concat(character)
}

export const getCurrentIndex = state => state.currentIndex
export const getCharacters = state => state.characters
export const getLength = a => a.length
export const getCurrentCharacter = createSelector(
  getCurrentIndex,
  getCharacters,
  (idx, characters) => characters[idx]
)
export const getCorrectCharacter = createSelector(
  getCurrentCharacter,
  character => character.character
)
export const getCharactersLength = createSelector(getCharacters, characters =>
  getLength(R.reduce(removeInitialSpaces, null, characters))
)
export const getIsFinished = createSelector(
  getCurrentIndex,
  getCharacters,
  (idx, characters) => idx >= characters.length
)
export const getCorrectCharacters = createSelector(getCharacters, characters =>
  characters.filter(c => c.status === 'correct')
)
export const getCorrectCharactersLength = createSelector(
  getCorrectCharacters,
  getLength
)
export const getAccuracy = createSelector(
  getCharactersLength,
  getCorrectCharactersLength,
  (charactersLength, correctCharactersLenght) =>
    `${correctCharactersLenght}/${charactersLength}`
)
export const getStartTime = state => state.startTime
export const getEndTime = state => state.endTime
export const getDuration = createSelector(
  getStartTime,
  getEndTime,
  (start, end) => (end - start).toFixed(2)
)
export const getSpeed = createSelector(
  getCharactersLength,
  getDuration,
  (charactersLength, duration) => (charactersLength / duration).toFixed(2)
)
