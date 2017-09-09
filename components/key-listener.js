import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getIsFinished } from '../store/selectors'
import { recordKey, startTimer, endTimer } from '../store'

class KeyListener extends React.Component {
  handleKeyPress({ key }) {
    if (key) {
      this.props.recordKey(key)
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

const mapDispathToProps = dispatch => ({
  recordKey: bindActionCreators(recordKey, dispatch),
  startTimer: bindActionCreators(startTimer, dispatch),
  endTimer: bindActionCreators(endTimer, dispatch),
})

export default connect(null, mapDispathToProps)(KeyListener)
