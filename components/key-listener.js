import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getIsFinished } from '../store/selectors'
import R from 'ramda'
import {
  recordKey,
  startTimer,
  endTimer,
  backspaceCharacter,
} from '../store/actions'

const ignoreKeys = [
  'Meta',
  'Alt',
  'Control',
  'Shift',
  'Escape',
  'Tab',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
]
const shouldIgnore = R.flip(R.contains)(ignoreKeys)

class KeyListener extends React.Component {
  constructor(props) {
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(e = window.event) {
    const { key, currentIndex } = e
    if (key === 'Backspace') {
      this.props.backspaceCharacter()
    } else if (!shouldIgnore(key)) {
      this.props.recordKey(key, currentIndex)
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
    this.props.startTimer(new Date().getTime() / 1000)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
    this.props.endTimer(new Date().getTime() / 1000)
  }

  render() {
    return null
  }
}

const mapDispatchToProps = dispatch => ({
  recordKey: bindActionCreators(recordKey, dispatch),
  startTimer: bindActionCreators(startTimer, dispatch),
  endTimer: bindActionCreators(endTimer, dispatch),
  backspaceCharacter: bindActionCreators(backspaceCharacter, dispatch),
})

export default connect(null, mapDispatchToProps)(KeyListener)
