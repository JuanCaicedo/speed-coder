import React from 'react'
const state = {
  nextKey: 'f'
}

class Index extends React.Component {

  componentDidMount() {
    window.onkeyup = (e) => {
      const key = e.keyCode ? e.keyCode : e.which
      console.log("key", key)
    }
  }

  render() {
    return <div>{state.nextKey}</div>
  }
}
export default Index
