import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import keycode from 'keycode'
import { recordKey } from '../store'

const getKey = ({ which, shiftKey }) => {
  const key = keycode(which)
  if (key === 'shift') {
    return null
  }
  if (shiftKey) {
    return key.toUpperCase()
  }

  return key
}

class KeyListener extends React.Component {
  componentDidMount() {
    window.onkeyup = (e) => {
      const key = getKey(e)
      if (key) {
        this.props.recordKey(key)
      }
    }
  }

  render() {
    return null
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    recordKey: bindActionCreators(recordKey, dispatch)
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispathToProps)(KeyListener)
