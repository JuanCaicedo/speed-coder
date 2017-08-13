import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import KeyListener from '../components/key-listener'


class Index extends React.Component {

  render() {
    const { nextKey, alreadyTyped, text } = this.props
    return (
      <div>
        <KeyListener />
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
