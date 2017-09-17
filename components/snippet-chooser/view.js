import { Component } from 'react'
import Frame from '../frame'
import CodeArea from '../code-area'
import MainButton from '../main-button'

export default class SnippetChooser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      snippet: props.snippet,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      snippet: event.target.value,
    })
  }

  render() {
    const { textRef } = this.props
    return (
      <CodeArea
        value={this.state.snippet}
        onChange={this.handleChange}
        ref={textRef}
      />
    )
  }
}
