import { expect } from 'chai'
import { getIsFinished, getAccuracy, getDuration, getSpeed } from '.'

describe('selectors', () => {
  describe('getIsFinished', () => {
    it('return false before last character reached', () => {
      const state = {
        currentIndex: 1,
        characters: [{}, {}],
      }
      expect(getIsFinished(state)).to.be.false
    })

    it('return true if last character reached', () => {
      const state = {
        currentIndex: 2,
        characters: [{}, {}],
      }
      expect(getIsFinished(state)).to.be.true
    })
  })

  describe('getAccuracy', () => {
    it('should return accuracy', () => {
      const state = {
        currentIndex: 2,
        characters: [
          { status: 'incorrect' },
          { status: 'correct' },
          { status: 'incorrect' },
        ],
      }
      expect(getAccuracy(state)).to.equal('1/3')
    })
  })

  describe('getDuration', () => {
    it('should get time taken', () => {
      const state = {
        startTime: 10,
        endTime: 130,
      }
      expect(getDuration(state)).to.equal('120.00')
    })
  })

  describe('getSpeed', () => {
    it('should get speed', () => {
      const state = {
        startTime: 1,
        endTime: 4,
        characters: [{}, {}, {}, {}, {}],
      }
      expect(getSpeed(state)).to.equal('1.67')
    })
  })
})
