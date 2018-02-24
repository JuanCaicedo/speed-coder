import { Component } from 'react'

export default class Audio extends Component {
  componentDidMount() {
    const { file } = this.props
    this.audio = new window.Audio(`static/${file}.mp3`)
    this.audio.loop = false
    this.audio.play()
  }

  componentWillUnmount() {
    // Only stop the audio if it would otherwise continue forever. This lets
    // short audio clips finish even if we remove this component from the DOM.
    this.audio.pause()
  }

  render() {
    return null
  }
}
