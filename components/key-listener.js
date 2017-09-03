import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getIsFinished } from '../store/selectors'
import { recordKey } from '../store'

class KeyListener extends React.Component {
  handleKeyPress({ key }) {
    if (key) {
      this.props.recordKey(key)
    }
  }

  componentDidMount() {
    window.onkeypress = (e = window.event) => this.handleKeyPress(e)
  }

  componentWillUnmount() {
    window.onkeypress = null
  }

  render() {
    return null
  }
}

const mapDispathToProps = dispatch => ({
  recordKey: bindActionCreators(recordKey, dispatch),
})

export default connect(null, mapDispathToProps)(KeyListener)
