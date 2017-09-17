import TypingBox from '../typing-box'
import { Done, Duration, Accuracy, Speed } from './styles'
import { CodeDiv } from '../code-area'

const TypingTest = ({ isFinished, accuracy, duration, speed, children }) => (
  <CodeDiv>
    {isFinished ? (
      <Done>
        <Accuracy>Accuracy: {accuracy}</Accuracy>
        <Duration>Time taken: {duration}</Duration>
        <Speed>Speed: {speed} characters/second</Speed>
      </Done>
    ) : (
      <TypingBox />
    )}
  </CodeDiv>
)

export default TypingTest
