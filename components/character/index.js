import styled from 'styled-components'

const StyledCharacter = styled.span`
  &.current-character {
    text-decoration: underline;
  }
  &.was-correct {
    color: blue;
  }
  &.was-incorrect {
    color: red;
  }
`

const getCorrectClass = (wasCorrect) => {
  if (wasCorrect === true) {
    return 'was-correct'
  } else if (wasCorrect === false) {
    return 'was-incorrect'
  }
}

const getStyleClasses = (currentIndex, idx, wasCorrect) => {
  const classes = []
  if (currentIndex === idx) {
    classes.push('current-character')
  }
  const correctClass = getCorrectClass(wasCorrect)
  if (correctClass) {
    classes.push(correctClass)
  }
  return classes;
}

const Character = (currentIndex) => ({ key, wasCorrect }, idx) => {
  const styleClasses = getStyleClasses(currentIndex, idx, wasCorrect)
  return (
      <StyledCharacter
    key={idx}
    className={styleClasses.join(' ')}
      >
      {key}
    </StyledCharacter>
  )
}

const initCharacter = (character) => ({
  key: character
})

export default Character

export { initCharacter }
