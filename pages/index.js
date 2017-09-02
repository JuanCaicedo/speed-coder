import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import TypingBox from '../components/typing-box'

const Index = () => (
  <TypingBox />
)

export default withRedux(initStore)(Index)
