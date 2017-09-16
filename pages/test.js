import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import SnippetChooser from '../components/snippet-chooser'

export const Index = () => <SnippetChooser />

export default withRedux(initStore)(Index)
