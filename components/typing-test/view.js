import TypingBox from '../typing-box'
import { StyledTypingTest, Done } from './styles'

const TypingTest = ({ isFinished, accuracy }) => (
  <StyledTypingTest>
    {isFinished ? <Done>Accuracy: {accuracy}</Done> : <TypingBox />}
  </StyledTypingTest>
)

export default TypingTest
