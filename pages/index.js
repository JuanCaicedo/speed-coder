import React from 'react'
import withRedux from 'next-redux-wrapper'
import styled, { injectGlobal } from 'styled-components'
import { initStore } from '../store'
import TypingTest from '../components/typing-test'
import SnippetChooser from '../components/snippet-chooser'

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
export const Index = () => (
  <Frame>
    <TypingTest />
    <SnippetChooser />
  </Frame>
)

export default withRedux(initStore)(Index)
