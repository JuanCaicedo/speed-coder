import KeyListener from '../key-listener'
import Character from '../character'
import { Container } from './styles'

const TypingBox = ({ characters }) => (
  <Container>
    <KeyListener />
    {characters.map((character, idx) => (
      <Character {...character} key={idx} idx={idx} />
    ))}
  </Container>
)

export default TypingBox
