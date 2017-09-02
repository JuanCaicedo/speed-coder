import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Character from './view'
import { shallow, mount } from 'enzyme'
import { expect as chaiExpect } from 'chai'

describe('view', () => {
  it('should render regular character', () => {
    const props = {
      character: 'a',
    }
    const wrapper = shallow(<Character {...props} />)
    chaiExpect(wrapper).to.have.html(
      '<span>a</span>'
    )
  })

  it('should render current character', () => {
    const props = {
      isCurrent: true,
    }
    const tree = renderer.create(<Character {...props} />).toJSON()
    expect(tree).toHaveStyleRule('text-decoration', 'underline')
  })

  it('should render correct character', () => {
    const props = {
      status: 'correct',
    }
    const tree = renderer.create(<Character {...props} />).toJSON()
    expect(tree).toHaveStyleRule('color', 'darkgreen')
  })

  it('should render incorrect character', () => {
    const props = {
      status: 'incorrect',
    }
    const tree = renderer.create(<Character {...props} />).toJSON()
    expect(tree).toHaveStyleRule('color', 'red')
  })

  it('should render break for newline character', () => {
    const props = {
      character: '\n',
    }
    const wrapper = shallow(<Character {...props} />)
    chaiExpect(wrapper).to.have.descendants('br');
  })

  it('should render text for newline character', () => {
    const props = {
      character: '\n',
    }
    const wrapper = mount(<Character {...props} />)
    chaiExpect(wrapper).to.have.text('↵');
  })

  it('should render space character', () => {
    const props = {
      character: ' ',
    }
    const wrapper = mount(<Character {...props} />)
    chaiExpect(wrapper).to.have.text(' ');
  })

  it('should render space character correct', () => {
    const props = {
      character: ' ',
      status: 'correct'
    }

    const tree = renderer.create(<Character {...props} />).toJSON()
    expect(tree).toHaveStyleRule('color', 'darkgreen')

    const wrapper = mount(<Character {...props} />)
    chaiExpect(wrapper).to.have.text(' ');
  })

})
