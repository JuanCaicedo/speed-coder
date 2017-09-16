import TypingBox from '../typing-box'
import { Done, Duration, Accuracy, Speed } from './styles'
import { CodeDiv } from '../code-area'
import Frame from '../frame'
import MainButton from '../main-button'

const TypingTest = ({ isFinished, accuracy, duration, speed, children }) => (
  <Frame>
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
    <MainButton>{children}</MainButton>
  </Frame>
)

export default TypingTest
