import { connect } from 'react-redux'
import { getIsFinished, getAccuracy, getDuration } from '../../store/selectors'
import TypingTest from './view'

export const mapStateToProps = state => ({
  isFinished: getIsFinished(state),
  accuracy: getAccuracy(state),
  duration: getDuration(state),
})

export default connect(mapStateToProps)(TypingTest)
