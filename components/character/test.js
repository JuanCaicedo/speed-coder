import renderer from 'react-test-renderer'
import Character from './view'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import { Correct, Incorrect, Current } from './view'

describe('view', () => {
  it('should render regular character', () => {
    const props = {
      character: 'a',
    }
    const wrapper = shallow(<Character {...props} />)
    expect(wrapper).to.have.html('<span>a</span>')
  })

  it('should render current character', () => {
    const props = {
      isCurrent: true,
    }
    const wrapper = mount(<Character {...props} />)
    expect(wrapper.find(Current)).to.be.present()
  })

  it('should render correct character', () => {
    const props = {
      status: 'correct',
    }
    const wrapper = mount(<Character {...props} />)
    expect(wrapper.find(Correct)).to.be.present()
  })

  it('should render incorrect character', () => {
    const props = {
      status: 'incorrect',
    }
    const wrapper = mount(<Character {...props} />)
    expect(wrapper.find(Incorrect)).to.be.present()
  })

  it('should render break for newline character', () => {
    const props = {
      character: '\n',
    }
    const wrapper = shallow(<Character {...props} />)
    expect(wrapper).to.have.descendants('br')
  })

  it('should render text for newline character', () => {
    const props = {
      character: '\n',
    }
    const wrapper = mount(<Character {...props} />)
    expect(wrapper).to.have.text('↵')
  })

  it('should render space character', () => {
    const props = {
      character: ' ',
    }
    const wrapper = mount(<Character {...props} />)
    expect(wrapper).to.have.text(' ')
  })

  it('should render space character correct', () => {
    const props = {
      character: ' ',
      status: 'correct',
    }

    const wrapper = mount(<Character {...props} />)
    expect(wrapper.find(Correct)).to.be.present()
    expect(wrapper).to.have.text(' ')
  })
})
