import { connect } from 'react-redux'
import Character from './view'

const mapStateToProps = (state) => ({
  currentIndex: state.currentIndex,
})

const initCharacter = (character) => ({
  character
})

export default connect(mapStateToProps)(Character)

export { initCharacter }
