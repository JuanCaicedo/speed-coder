const increaseIndex = (index) => (index + 1)

const addCharacter = (characters, pressedKey, currentIndex) => (
  [
    ...characters.slice(0, currentIndex),
    {
      character: characters[currentIndex].character,
      wasCorrect: pressedKey === characters[currentIndex].character
    },
    ...characters.slice(currentIndex + 1)
  ]
)

const reducer = (state, action) => {
  const { characters, currentIndex } = state
  switch (action.type) {
    case 'RECORD':
      return {
        ...state,
        currentIndex: increaseIndex(currentIndex),
        characters: addCharacter(characters, action.key, currentIndex)
      }
    default:
      return state
    }
}

export default reducer
