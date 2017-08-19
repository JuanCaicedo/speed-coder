import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import KeyListener from '../components/key-listener'
import Character from '../components/character'

class Index extends React.Component {

  render() {
    const { nextKey, alreadyTyped, text } = this.props
    return (
      <div>
        <KeyListener />
        <div>nextKey: { nextKey }</div>
        <div>alreadyTyped: { alreadyTyped }</div>
        { text.split('').map(Character) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nextKey: state.nextKey,
    text: state.text,
    alreadyTyped: state.alreadyTyped
  }
}

export default withRedux(initStore, mapStateToProps)(Index)
