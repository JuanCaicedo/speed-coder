import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import keycode from 'keycode'
import { recordKey } from '../store'

class KeyListener extends React.Component {
  componentDidMount() {
    window.onkeyup = (e) => {
      const key = keycode(e)
      this.props.recordKey(key)
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