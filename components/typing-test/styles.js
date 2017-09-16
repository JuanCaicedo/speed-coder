import styled from 'styled-components'

export const Done = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const Info = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`

export const Accuracy = styled(Info)``
export const Duration = styled(Info)``
export const Speed = styled(Info)``
