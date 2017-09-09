import { expect } from 'chai'
import reducer, { addCharacter } from '.'

describe('reducers', () => {
  describe('addCharacter', () => {
    it('updates correct character', () => {
      const state = {
        characters: [
          {},
          {
            character: 'x',
          },
          {},
        ],
        currentIndex: 1,
      }
      const action = {
        key: 'x',
      }
      expect(addCharacter(state, action))
        .to.have.property(1)
        .and.to.eql({
          character: 'x',
          status: 'correct',
        })
    })
  })

  describe('reducer', () => {
    it('starts timer', () => {
      const state = {}
      const action = {
        type: 'START_TIMER',
        startTime: 1000,
      }
      expect(reducer(state, action)).to.have.property('startTime', 1000)
    })

    it('ends timer', () => {
      const state = {}
      const action = {
        type: 'END_TIMER',
        endTime: 1000,
      }
      expect(reducer(state, action)).to.have.property('endTime', 1000)
    })
  })
})
