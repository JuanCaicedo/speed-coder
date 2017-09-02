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

const otherCharacter = (character, wasCorrect) => {
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
  return otherCharacter(character, wasCorrect)
}

const FullCharacter = (props) => {
  if(props.character === '\n') {
    return (
      <span>
        <Character {...props} />
        <br />
      </span>
    )
  }
  return (
    <Character {...props} />
  )
}
export default FullCharacter
