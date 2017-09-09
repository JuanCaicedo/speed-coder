import { expect } from 'chai'
import R from 'ramda'
import {
  getIsFinished,
  getAccuracy,
  getDuration,
  getSpeed,
  getCharactersLength,
  removeInitialSpaces,
} from '.'

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
    it('returns accuracy', () => {
      const state = {
        currentIndex: 2,
        characters: [{}, { status: 'correct' }, { status: 'incorrect' }],
      }
      expect(getAccuracy(state)).to.equal('1/3')
    })

    it('does not include initial spaces in correct', () => {
      const state = {
        currentIndex: 2,
        characters: [
          { character: '\n' },
          {
            character: ' ',
          },
          { status: 'correct' },
        ],
      }
      expect(getAccuracy(state)).to.equal('1/2')
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

  describe('getCharactersLength', () => {
    it('should get length', () => {
      const state = {
        characters: [{}, {}, {}, {}, {}],
      }
      expect(getCharactersLength(state)).to.equal(5)
    })

    it('should not count spaces between new line and char', () => {
      const state = {
        characters: [
          {
            character: '\n',
          },
          {
            character: ' ',
          },
          {
            character: ' ',
          },
          {
            character: 'e',
          },
        ],
      }
      expect(getCharactersLength(state)).to.equal(2)
    })
  })

  describe('removeInitialSpaces', () => {
    it('returns previous if last character is newline and current is space', () => {
      const previous = [
        {},
        {
          character: '\n',
        },
      ]
      const current = {
        character: ' ',
      }
      const actual = removeInitialSpaces(previous, current)
      const expected = previous
      expect(actual).to.eql(expected)
    })

    describe('reduce', () => {
      it('should remove spaces between new lines and characters', () => {
        const characters = [
          {
            character: '\n',
          },
          {
            character: ' ',
          },
          {
            character: ' ',
          },
          {
            character: 'a',
          },
        ]
        const actual = R.reduce(removeInitialSpaces, null, characters)
        expect(actual).to.have.length(2)
      })
    })
  })

  describe('getIsFinished', () => {
    it('includes initial spaces', () => {
      const state = {
        characters: [
          {
            character: '\n',
          },
          {
            character: ' ',
          },
          {
            character: ' ',
          },
          {
            character: 'a',
          },
        ],
        currentIndex: 3,
      }
      expect(getIsFinished(state)).to.be.false
    })
  })
})
