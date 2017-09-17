import {
  CorrectCharacter,
  IncorrectCharacter,
  CurrentCharacter,
} from './styles'
import Audio from '../audio'

const U_SPACE = '\u00A0'
const SPACE = ' '
const NEW_LINE = '\n'
const NEW_LINE_TEXT = '↵'

const renderCharacter = character => {
  if (character === SPACE) {
    return U_SPACE
  } else if (character === NEW_LINE) {
    return NEW_LINE_TEXT
  }
  return character
}

export const Correct = ({ character }) => (
  <span>
    <CorrectCharacter>{renderCharacter(character)}</CorrectCharacter>
    <Audio file="keypress" />
  </span>
)

export const Incorrect = ({ character }) => (
  <span>
    <IncorrectCharacter>{renderCharacter(character)}</IncorrectCharacter>
    <Audio file="incorrect" />
  </span>
)

export const Current = ({ character }) => (
  <CurrentCharacter>{renderCharacter(character)}</CurrentCharacter>
)

const PlainCharacter = ({ isCurrent, character, status }) => {
  if (isCurrent) {
    return <Current character={character} />
  } else if (status === 'correct') {
    return <Correct character={character} />
  } else if (status === 'incorrect') {
    return <Incorrect character={character} />
  }
  return <span>{renderCharacter(character)}</span>
}

const Character = props => {
  if (props.character === '\n') {
    return (
      <span>
        <PlainCharacter {...props} />
        <br />
      </span>
    )
  }
  return <PlainCharacter {...props} />
}
export default Character
