const initialText = `
const CharacterButton = ({ character, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {character}
  </button>
);`

const format = text => text.split('')

export default format(initialText)
