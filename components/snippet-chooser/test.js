import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import SnippetChooser from './view'
import CodeArea from '../code-area'

describe('SnippetChooser', () => {
  it('shows text area', () => {
    const wrapper = shallow(<SnippetChooser />)
    expect(wrapper.find(CodeArea)).to.be.present()
  })

  it('stores snippet in state on change', () => {
    const wrapper = shallow(<SnippetChooser />)
    wrapper.simulate('change', { target: { value: 'foo' } })
    expect(wrapper.state('snippet')).to.equal('foo')
  })

  it('passes snippet to CodeArea', () => {
    const wrapper = shallow(<SnippetChooser snippet="test-snippet" />)
    expect(wrapper.find(CodeArea).prop('value')).to.equal('test-snippet')
  })
})
