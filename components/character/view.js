import styled from 'styled-components'

const CorrectCharacter = styled.span`
  color: darkgreen;

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
    if (character === ' ') {
      return <span>&nbsp;</span>
    }
    return (
      <span>{character}</span>
    )
  }
}

const PlainCharacter = ({ isCurrent, character, wasCorrect}) => {
  if (isCurrent) {
    return <CurrentCharacter>{character}</CurrentCharacter>
  }
  return otherCharacter(character, wasCorrect)
}

const Character = (props) => {
  if(props.character === '\n') {
    return (
      <span>
        <PlainCharacter {...props} />
        <br />
      </span>
    )
  }
  return (
    <PlainCharacter {...props} />
  )
}
export default Character
