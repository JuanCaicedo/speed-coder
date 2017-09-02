import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import styled, { injectGlobal } from 'styled-components'
import TypingBox from '../components/typing-box'

injectGlobal`
  body {
    margin: 0;
    background-color: black;
  }
`

const Frame = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`

const Index = () => (
  <Frame>
    <TypingBox />
  </Frame>
)


export default withRedux(initStore)(Index)
