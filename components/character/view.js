import {
  CorrectCharacter,
  IncorrectCharacter,
  CurrentCharacter,
} from './styles'

const U_SPACE = '\u00A0'
const SPACE = ' '
const NEW_LINE = '\n'
const NEW_LINE_TEXT = '↵'

const renderCharacter = (character) => {
  if (character === SPACE) {
    return U_SPACE
  } else if (character === NEW_LINE) {
    return NEW_LINE_TEXT
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
