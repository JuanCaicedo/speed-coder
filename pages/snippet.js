import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import Link from 'next/link'
import Router from 'next/router'
import { initStore } from '../store'
import initGlobalStyles from '../components/global'
import Frame from '../components/frame'
import MainButton from '../components/main-button'
import SnippetChooser from '../components/snippet-chooser'
import Info from '../components/info'
import { updateSnippet } from '../store/actions'
import { getCharactersText } from '../store/selectors'

initGlobalStyles()

export const mapStateToProps = state => ({
  snippet: getCharactersText(state),
})
export const mapDispatchToProps = dispatch => ({
  onButtonClick: snippet => {
    dispatch(updateSnippet(snippet))
  },
})

class Index extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onButtonClick(this.snippet.props.value)
    Router.push('/')
  }

  render() {
    return (
      <div>
        <Frame>
          <SnippetChooser
            textRef={snippet => (this.snippet = snippet)}
            snippet={this.props.snippet}
          />
          <MainButton onClick={this.handleClick}>
            <a>Practice this snippet</a>
          </MainButton>
        </Frame>
        <Info />
      </div>
    )
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index)
