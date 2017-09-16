import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getIsFinished } from '../store/selectors'
import { recordKey, startTimer, endTimer } from '../store/actions'

class KeyListener extends React.Component {
  handleKeyPress({ key, currentIndex }) {
    if (key) {
      this.props.recordKey(key, currentIndex)
    }
  }

  componentDidMount() {
    window.onkeypress = (e = window.event) => this.handleKeyPress(e)
    this.props.startTimer(new Date().getTime() / 1000)
  }

  componentWillUnmount() {
    window.onkeypress = null
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
