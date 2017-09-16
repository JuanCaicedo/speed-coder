import React from 'react'
import withRedux from 'next-redux-wrapper'
import styled, { injectGlobal } from 'styled-components'
import Link from 'next/link'
import { initStore } from '../store'
import TypingTest from '../components/typing-test'

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
    <Link href="/snippet" prefetch>
      <button>ChangeSnippet</button>
    </Link>
  </Frame>
)

export default withRedux(initStore)(Index)
