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

const PlainCharacter = ({ isCurrent, character, status}) => {
  if (isCurrent) {
    return (
      <CurrentCharacter>{character}</CurrentCharacter>
    )
  } else if (status === 'correct') {
    return (
      <CorrectCharacter>{character}</CorrectCharacter>
    )
  } else if (status === 'incorrect') {
    return (
      <IncorrectCharacter>{character}</IncorrectCharacter>
    )
  } else if (character === ' ') {
    return (
      <span>&nbsp;</span>
    )
  }
  return (
    <span>{character}</span>
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
