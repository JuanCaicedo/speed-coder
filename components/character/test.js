import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Character from './view'
import { shallow } from 'enzyme'
import { expect as chaiExpect } from 'chai'

describe('view', () => {
  it('should render current character', () => {
    const props = {
      idx: 1,
      currentIndex: 1
    }
    const tree = renderer.create(<Character {...props} />).toJSON()
    expect(tree).toHaveStyleRule('text-decoration', 'underline')
  })

  it('should render correct character', () => {
    const props = {
      wasCorrect: true,
      idx: 2,
      currentIndex: 1
    }
    const tree = renderer.create(<Character {...props} />).toJSON()
    expect(tree).toHaveStyleRule('color', 'blue')
  })

  it('should render incorrect character', () => {
    const props = {
      wasCorrect: false,
      idx: 2,
      currentIndex: 1
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
})
