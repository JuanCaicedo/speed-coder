import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import { expect as chaiExpect } from 'chai'
import SnippetChooser from './view'

const placeholderText = `
  console.log('hello world')
`

describe('SnippetChooser', () => {
  it('shows text area', () => {
    const wrapper = shallow(<SnippetChooser />)
    chaiExpect(wrapper.find('textarea')).to.be.present()
  })

  it('shows placeholder', () => {
    const wrapper = shallow(<SnippetChooser />)
    chaiExpect(wrapper.find('textarea').prop('placeholder')).to.eql(
      placeholderText
    )
  })

  it('has submit button', () => {
    const wrapper = shallow(<SnippetChooser />)
    chaiExpect(wrapper.find('button')).to.be.present()
  })

  it('calls onButtonClick', () => {
    const onButtonClick = jest.fn()
    const props = {
      onButtonClick,
    }
    const wrapper = shallow(<SnippetChooser {...props} />)
    wrapper.find('button').simulate('click')
    chaiExpect(onButtonClick.mock.calls).to.have.length(1)
  })
})
