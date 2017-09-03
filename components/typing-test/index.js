import { connect } from 'react-redux'
import { getIsFinished, getAccuracy } from '../../store/selectors'
import TypingTest from './view'

const mapStateToProps = state => ({
  isFinished: getIsFinished(state),
  accuracy: getAccuracy(state),
})

export default connect(mapStateToProps)(TypingTest)
