import TypingBox from '../typing-box'
import { StyledTypingTest, Done, Duration, Accuracy, Speed } from './styles'

const TypingTest = ({ isFinished, accuracy, duration, speed }) => (
  <StyledTypingTest>
    {isFinished ? (
      <Done>
        <Accuracy>Accuracy: {accuracy}</Accuracy>
        <Duration>Time taken: {duration}</Duration>
        <Speed>Speed: {speed} characters/second</Speed>
      </Done>
    ) : (
      <TypingBox />
    )}
  </StyledTypingTest>
)

export default TypingTest
