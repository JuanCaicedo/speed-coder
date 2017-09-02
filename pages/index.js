import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import KeyListener from '../components/key-listener'
import Character from '../components/character'
import styled from 'styled-components'

const Container = styled.div`
  background-color: lightgrey;
  padding: 20px;
`

const Index = ({ characters }) => (
  <Container>
    <KeyListener />
    { characters.map( (character, idx) => (
      <Character {...character} key={idx} />
    ))}
  </Container>
)

const mapStateToProps = (state) => ({
  characters: state.characters,
  currentIndex: state.currentIndex
})


export default withRedux(initStore, mapStateToProps)(Index)
