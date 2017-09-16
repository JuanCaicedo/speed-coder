import { getCurrentIndex, getCharacters } from '../selectors'

export const recordKey = (key, currentIndex) => (dispatch, getState) => {
  const state = getState()
  return dispatch({
    type: 'RECORD',
    key,
    currentIndex: getCurrentIndex(state),
    characters: getCharacters(state),
  })
}

export const startTimer = startTime => dispatch => {
  return dispatch({
    type: 'START_TIMER',
    startTime,
  })
}

export const endTimer = endTime => dispatch => {
  return dispatch({
    type: 'END_TIMER',
    endTime,
  })
}

export const updateSnippet = snippet => ({
  type: 'UPDATE_SNIPPET',
  snippet,
})

export const backspaceCharacter = currentIndex => (dispatch, getState) => {
  const state = getState()
  return dispatch({
    type: 'BACKSPACE',
    currentIndex: getCurrentIndex(state),
    characters: getCharacters(state),
  })
}
