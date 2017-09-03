import TypingBox from '../typing-box'
import { StyledTypingTest } from './styles'

const TypingTest = ({ isFinished }) => (
  <StyledTypingTest>
    { isFinished ? (
      <div>Done</div>
    ) : (
      <TypingBox />
    )}
  </StyledTypingTest>
)

export default TypingTest
