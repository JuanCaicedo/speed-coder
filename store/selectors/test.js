import { expect } from 'chai'
import { getIsFinished, getAccuracy } from '.'

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

  describe('getAccuracy', () => {

    it('should return accuracy', () => {
      const state = {
        currentIndex: 2,
        characters: [
          { status: 'incorrect'},
          { status: 'correct'},
          { status: 'incorrect'},
        ]
      }
      expect(getAccuracy(state)).to.equal('1/3')

    })
  })
})
