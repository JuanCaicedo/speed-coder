import styled from 'styled-components'

const StyledCharacter = styled.span`
  &.current-character {
    text-decoration: underline;
    color: blue;
  }
`

const Character = (currentIndex) => ({ key }, idx) => {
  const currentClass = currentIndex === idx ? 'current-character' : '';
  return (
    <StyledCharacter key={idx}
                     className={currentClass} >
      {key}
    </StyledCharacter>
  )
}

export default Character
