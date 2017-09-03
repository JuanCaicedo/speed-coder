import { expect } from 'chai'
import { getIsFinished } from '.'

describe('selectors', () => {

  describe('getIsFinished', () => {

    it('return false before last character reached', () => {
      const state = {
        currentIndex: 1,
        characters: [ {}, {} ]
      }
      expect(getIsFinished(state)).to.be.false
    })

    it('return true if last character reached', () => {
      const state = {
        currentIndex: 2,
        characters: [ {}, {} ]
      }
      expect(getIsFinished(state)).to.be.true
    })
  })
})
