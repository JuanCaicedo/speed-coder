import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import TypingTest from './view'
import TypingBox from '../typing-box'

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

  it('shows result after finishing', () => {
    const props = {
      characters: [{}],
      isFinished: true,
    }
    const wrapper = shallow(<TypingTest {...props} />)
    expect(wrapper).to.contain(
      <div>Done</div>
    )
  })
})
