const placeholderText = `
  console.log('hello world')
`
const SnippetChooser = ({ onButtonClick }) => (
  <div>
    <textarea placeholder={placeholderText} />
    <button onClick={onButtonClick} />
  </div>
)

export default SnippetChooser
