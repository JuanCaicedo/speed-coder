import TypingBox from '../typing-box'
import { StyledTypingTest, Done } from './styles'

const TypingTest = ({ isFinished }) => (
  <StyledTypingTest>
    { isFinished ? (
      <Done>Done</Done>
    ) : (
      <TypingBox />
    )}
  </StyledTypingTest>
)

export default TypingTest
