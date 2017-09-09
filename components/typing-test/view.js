import TypingBox from '../typing-box'
import { StyledTypingTest, Done, Duration, Accuracy } from './styles'

const TypingTest = ({ isFinished, accuracy, duration }) => (
  <StyledTypingTest>
    {isFinished ? (
      <Done>
        <Accuracy>Accuracy: {accuracy}</Accuracy>
        <Duration>Time taken: {duration}</Duration>
      </Done>
    ) : (
      <TypingBox />
    )}
  </StyledTypingTest>
)

export default TypingTest
