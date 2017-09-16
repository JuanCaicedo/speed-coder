import { Component } from 'react'
import { UpdateSnippetButton } from './styles'
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
      <div>
        <textarea
          placeholder={placeholderText}
          value={this.state.snippet}
          onChange={this.handleChange}
          ref="snippet"
        />
        <UpdateSnippetButton onClick={this.handleClick}>
          {this.props.children}
        </UpdateSnippetButton>
      </div>
    )
  }
}
