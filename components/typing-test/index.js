import { connect } from 'react-redux'
import { getIsFinished } from '../../store/selectors'
import TypingTest from './view'

const mapStateToProps = (state) => ({
  isFinished: getIsFinished(state)
})

export default connect(mapStateToProps)(TypingTest)
