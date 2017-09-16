import { getCurrentIndex } from '../selectors'

export const recordKey = (key, currentIndex) => (dispatch, getState) => {
  return dispatch({
    type: 'RECORD',
    key,
    currentIndex: getCurrentIndex(getState()),
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
