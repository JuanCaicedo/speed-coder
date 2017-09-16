import { connect } from 'react-redux'
import SnippetChooser from './view'
import { updateSnippet } from '../../store/actions'

export const mapDispatchToProps = dispatch => ({
  onButtonClick: snippet => {
    dispatch(updateSnippet(snippet))
  },
})
export default connect(null, mapDispatchToProps)(SnippetChooser)
