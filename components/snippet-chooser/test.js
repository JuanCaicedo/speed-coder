import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import { expect as chaiExpect } from 'chai'
import SnippetChooser from './view'
import { mapDispatchToProps } from '.'
import { UpdateSnippetButton } from './styles'

const placeholderText = `console.log('hello world')`

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
    chaiExpect(wrapper.find(UpdateSnippetButton)).to.be.present()
  })

  it('calls onButtonClick with textarea snippet', () => {
    const onButtonClick = jest.fn()
    const props = {
      onButtonClick,
    }
    const wrapper = shallow(<SnippetChooser {...props} />)
    wrapper.setState({
      snippet: 'test snippet',
    })
    wrapper.find(UpdateSnippetButton).simulate('click')
    chaiExpect(onButtonClick.mock.calls[0][0]).to.eql('test snippet')
  })

  it('calls onButtonClick with placeholder text if no snippet', () => {
    const onButtonClick = jest.fn()
    const props = {
      onButtonClick,
    }
    const wrapper = shallow(<SnippetChooser {...props} />)
    wrapper.find(UpdateSnippetButton).simulate('click')
    chaiExpect(onButtonClick.mock.calls[0][0]).to.eql(placeholderText)
  })
})

describe('mapDispatchToProps', () => {
  describe('onButtonClick', () => {
    it('calls dispatch', () => {
      const dispatch = jest.fn()
      const { onButtonClick } = mapDispatchToProps(dispatch)

      onButtonClick('test snippet')
      chaiExpect(dispatch.mock.calls[0][0]).to.eql({
        type: 'UPDATE_SNIPPET',
        snippet: 'test snippet',
      })
    })
  })
})
