import { Component } from 'react'
import Frame from '../frame'
import CodeArea from '../code-area'
import MainButton from '../main-button'

const placeholderText = `console.log('hello world')`

export default class SnippetChooser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      snippet: '',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick() {
    const { snippet } = this.state
    const { onButtonClick } = this.props
    onButtonClick(snippet || placeholderText)
  }

  handleChange(event) {
    this.setState({
      snippet: event.target.value,
    })
  }
  render() {
    const { onButtonClick } = this.props
    return (
      <Frame>
        <CodeArea
          placeholder={placeholderText}
          value={this.state.snippet}
          onChange={this.handleChange}
          ref="snippet"
        />
        <MainButton onClick={this.handleClick}>
          {this.props.children}
        </MainButton>
      </Frame>
    )
  }
}
