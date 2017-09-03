import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import TypingTest from './view'
import TypingBox from '../typing-box'
import { Done } from './styles'

describe('index page', () => {
  it('shows typing box before finishing', () => {
    const props = {
      characters: [{}],
    }
    const wrapper = shallow(<TypingTest {...props} />)
    expect(wrapper).to.contain(
      <TypingBox />
    )
  })

  it('shows accuracy after finishing', () => {
    const props = {
      characters: [{}],
      isFinished: true,
      accuracy: '4/100'
    }
    const wrapper = mount(<TypingTest {...props} />)
    expect(wrapper.find(Done)).to.have.text(
      'Accuracy: 4/100'
    )
  })
})
