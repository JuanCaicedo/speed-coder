import styled from 'styled-components'

const StyledCharacter = styled.span`
  &.selected-character {
    text-decoration: underline;
    color: blue;
  }
`

const Character = ({ key, isCurrent}, idx) => (
  <StyledCharacter key={idx}
                   className={ isCurrent ? 'selected-character' : '' } >
    {key}
  </StyledCharacter>
)

export default Character
