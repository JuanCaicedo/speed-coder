import { connect } from 'react-redux'
import TypingBox from './view'

const mapStateToProps = (state) => ({
  characters: state.characters,
  currentIndex: state.currentIndex
})

export default connect(mapStateToProps)(TypingBox)
