import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import Audio from '.'
import Sound from 'react-sound'

describe('Audio', () => {
  it('sets Sound with status playing', () => {
    const wrapper = shallow(<Audio />)
    expect(wrapper.find(Sound).prop('playStatus')).to.equal(
      Sound.status.PLAYING
    )
  })

  it('passes file to Sound', () => {
    const wrapper = shallow(<Audio file="foo" />)
    expect(wrapper.find(Sound).prop('url')).to.equal('static/foo.mp3')
  })

  it('sets Sound to status based on state', () => {
    const wrapper = shallow(<Audio />).setState({
      status: Sound.status.STOPPED,
    })
    expect(wrapper.find(Sound).prop('playStatus')).to.equal(
      Sound.status.STOPPED
    )
  })
})
