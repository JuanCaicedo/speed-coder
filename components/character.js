const Character = (letter, idx) => {
  const key = letter + idx
  return <span key={key}>{letter}</span>
}

export default Character
