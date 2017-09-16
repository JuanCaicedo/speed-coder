import { Component } from 'react'
const placeholderText = `console.log('hello world')`

export default class SnippetChooser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      snippet: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { snippet } = this.state
    const { onButtonClick } = this.props
    onButtonClick(snippet || placeholderText)
  }

  render() {
    const { onButtonClick } = this.props
    return (
      <div>
        <textarea placeholder={placeholderText} value={this.state.snippet} />
        <div onClick={this.handleClick}>{this.props.children}</div>
      </div>
    )
  }
}
