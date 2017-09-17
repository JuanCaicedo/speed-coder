import React from 'react'
import withRedux from 'next-redux-wrapper'
import Link from 'next/link'
import { initStore } from '../store'
import initGlobalStyles from '../components/global'
import Frame from '../components/frame'
import MainButton from '../components/main-button'
import TypingTest from '../components/typing-test'
import Info from '../components/info'

initGlobalStyles()

export const Index = () => (
  <div>
    <Frame>
      <TypingTest />
      <Link href="/snippet" prefetch>
        <MainButton>
          <a>Change Snippet</a>
        </MainButton>
      </Link>
    </Frame>
    <Info />
  </div>
)

export default withRedux(initStore)(Index)
