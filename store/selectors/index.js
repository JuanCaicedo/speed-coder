import { createSelector } from 'reselect'

export const getCurrentIndex = (state) => state.currentIndex
export const getCharacters = (state) => state.characters
export const getCurrentCharacter = createSelector(
  getCurrentIndex,
  getCharacters,
  (idx, characters) => characters[idx]
)
export const getCorrectCharacter = createSelector(
  getCurrentCharacter,
  (character) => character.character
)
