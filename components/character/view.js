import styled from 'styled-components'

const CorrectCharacter = styled.span`
  color: blue;

`
const IncorrectCharacter = styled.span`
  color: red;
`

const CurrentCharacter = styled.span`
  text-decoration: underline;
`

const alreadyTyped = (character, wasCorrect, currentIndex, idx) => {
  if (wasCorrect === true) {
    return (
      <CorrectCharacter>{character}</CorrectCharacter>
    )
  } else if (wasCorrect === false) {
    return (
      <IncorrectCharacter>{character}</IncorrectCharacter>
    )
  } else {
    return (
      <span>{character}</span>
    )
  }
}

const Character = ({ character, wasCorrect, currentIndex, idx }) => {
  if (currentIndex === idx) {
    return <CurrentCharacter>{character}</CurrentCharacter>
  }
  return alreadyTyped(character, wasCorrect, currentIndex, idx)
}

export default Character
