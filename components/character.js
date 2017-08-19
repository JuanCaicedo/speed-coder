const Character = ({ key, isCurrent}, idx) => {
  return <div key={idx}>{key} {isCurrent.toString()} </div>
}

export default Character
