import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import TypingTest from './view'
import TypingBox from '../typing-box'
import { Accuracy, Duration, Speed } from './styles'

describe('index page', () => {
  it('shows typing box before finishing', () => {
    const props = {
      characters: [{}],
    }
    const wrapper = shallow(<TypingTest {...props} />)
    expect(wrapper).to.contain(<TypingBox />)
  })

  it('shows accuracy after finishing', () => {
    const props = {
      characters: [{}],
      isFinished: true,
      accuracy: '4/100',
    }
    const wrapper = mount(<TypingTest {...props} />)
    expect(wrapper.find(Accuracy)).to.have.text('Accuracy: 4/100')
  })

  it('shows duration after finishing', () => {
    const props = {
      characters: [{}],
      isFinished: true,
      duration: '2.5s',
    }
    const wrapper = mount(<TypingTest {...props} />)
    expect(wrapper.find(Duration)).to.have.text('Time taken: 2.5s')
  })

  it('shows duration after finishing', () => {
    const props = {
      isFinished: true,
      speed: '1.67',
    }
    const wrapper = mount(<TypingTest {...props} />)
    expect(wrapper.find(Speed)).to.have.text('Speed: 1.67 characters/second')
  })
})
