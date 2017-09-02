import styled from 'styled-components'

const SPACE = '\u00A0'

const CorrectCharacter = styled.span`
  color: darkgreen;

`
const IncorrectCharacter = styled.span`
  color: red;
`

const CurrentCharacter = styled.span`
  text-decoration: underline;
`

const renderCharacter = (character) => {
  if (character === ' ') {
    return SPACE
  }
  return character
}

const PlainCharacter = ({ isCurrent, character, status}) => {
  if (isCurrent) {
    return (
      <CurrentCharacter>{renderCharacter(character)}</CurrentCharacter>
    )
  } else if (status === 'correct') {
    return (
      <CorrectCharacter>{renderCharacter(character)}</CorrectCharacter>
    )
  } else if (status === 'incorrect') {
    return (
      <IncorrectCharacter>{renderCharacter(character)}</IncorrectCharacter>
    )
  }
  return (
    <span>{renderCharacter(character)}</span>
  )
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
