import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Character from './view'
import { shallow, mount } from 'enzyme'
import { expect as chaiExpect } from 'chai'

describe('view', () => {
  it('should render current character', () => {
    const props = {
      isCurrent: true,
    }
    const tree = renderer.create(<Character {...props} />).toJSON()
    expect(tree).toHaveStyleRule('text-decoration', 'underline')
  })

  it('should render correct character', () => {
    const props = {
      wasCorrect: true,
    }
    const tree = renderer.create(<Character {...props} />).toJSON()
    expect(tree).toHaveStyleRule('color', 'darkgreen')
  })

  it('should render incorrect character', () => {
    const props = {
      wasCorrect: false,
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

  it('should render break for newline character', () => {
    const props = {
      character: ' ',
    }
    const wrapper = mount(<Character {...props} />)
    chaiExpect(wrapper).to.have.text(' ');
  })
})
