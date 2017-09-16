import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getIsFinished } from '../store/selectors'
import { recordKey, startTimer, endTimer } from '../store/actions'

class KeyListener extends React.Component {
  constructor(props) {
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(e = window.event) {
    const { key, currentIndex } = e
    if (key) {
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
})

export default connect(null, mapDispatchToProps)(KeyListener)
