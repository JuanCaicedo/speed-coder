import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import KeyListener from '../components/key-listener'
import Character from '../components/character'

class Index extends React.Component {

  render() {
    const { characters } = this.props
    return (
      <div>
        { characters.map(Character) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

export default withRedux(initStore, mapStateToProps)(Index)
