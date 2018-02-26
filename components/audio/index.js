import Sound from 'react-sound'
import { Component } from 'react'

class Audio extends Component {
  state = {
    status: Sound.status.PLAYING,
  }

  handleFinished = () => {
    this.setState({
      status: Sound.status.STOPPED,
    })
  }

  render() {
    const { file } = this.props
    const { status } = this.state
    return (
      <Sound
        playStatus={status}
        url={`static/${file}.mp3`}
        onFinishedPlaying={this.handleFinished}
      />
    )
  }
}

export default Audio
