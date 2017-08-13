import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

class Index extends React.Component {

  componentDidMount() {
    window.onkeyup = (e) => {
      const key = e.keyCode ? e.keyCode : e.which
    }
  }

  render() {
    const { nextKey, alreadyTyped, text } = this.props
    return (
      <div>
        <div>nextKey: { nextKey }</div>
        <div>alreadyTyped: { alreadyTyped }</div>
        <div>text: { text }</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nextKey: state.nextKey,
    text: state.text
  }
}

export default withRedux(initStore, mapStateToProps)(Index)
