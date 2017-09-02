import { connect } from 'react-redux'
import Character from './view'

const mapStateToProps = (state, ownProps) => ({
  currentIndex: state.currentIndex,
  isCurrent: state.currentIndex === ownProps.idx
})

const initCharacter = (character) => ({
  character
})

export default connect(mapStateToProps)(Character)

export { initCharacter }
