import React from 'react'
import withRedux from 'next-redux-wrapper'
import Link from 'next/link'
import { initStore } from '../store'
import TypingTest from '../components/typing-test'
import initGlobalStyles from '../components/global'

initGlobalStyles()

export const Index = () => (
  <TypingTest>
    <Link href="/snippet" prefetch>
      <a>Change Snippet</a>
    </Link>
  </TypingTest>
)

export default withRedux(initStore)(Index)
