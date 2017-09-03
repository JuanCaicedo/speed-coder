import { createSelector } from 'reselect'

export const getCurrentIndex = (state) => state.currentIndex
export const getCharacters = (state) => state.characters
export const getLength = (a) => a.length
export const getCurrentCharacter = createSelector(
  getCurrentIndex,
  getCharacters,
  (idx, characters) => characters[idx]
)
export const getCorrectCharacter = createSelector(
  getCurrentCharacter,
  (character) => character.character
)
export const getCharactersLength = createSelector(
  getCharacters,
  getLength,
)
export const getIsFinished = createSelector(
  getCurrentIndex,
  getCharactersLength,
  (idx, charactersLength) => idx >= charactersLength
)
export const getCorrectCharacters = createSelector(
  getCharacters,
  characters => characters.filter(c => c.status === 'correct')
)
export const getCorrectCharactersLength = createSelector(
  getCorrectCharacters,
  getLength,
)
export const getAccuracy = createSelector(
  getCharactersLength,
  getCorrectCharactersLength,
  (charactersLength, correctCharactersLenght) => `${correctCharactersLenght}/${charactersLength}`
)
