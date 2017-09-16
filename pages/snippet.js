import React from 'react'
import withRedux from 'next-redux-wrapper'
import Link from 'next/link'
import { initStore } from '../store'
import SnippetChooser from '../components/snippet-chooser'
import MainButton from '../components/main-button'
import initGlobalStyles from '../components/global'

initGlobalStyles()

export const Index = () => (
  <SnippetChooser>
    <Link href="/" prefetch>
      <a>Practice this snippet</a>
    </Link>
  </SnippetChooser>
)

export default withRedux(initStore)(Index)
