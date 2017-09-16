import { expect } from 'chai'
import reducer, {
  addCharacter,
  getNextIndex,
  nextNonSpaceIndex,
  removeInitialSpaces,
} from '.'

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

  describe('removeInitialSpaces', () => {
    it('should add character if not space', () => {
      const character = {
        character: 'a',
      }
      const actual = removeInitialSpaces([], character)
      const expected = [
        {
          character: 'a',
        },
      ]
      expect(actual).to.eql(expected)
    })

    it('should not add spaces if no previous character', () => {
      const character = {
        character: ' ',
      }
      const actual = removeInitialSpaces([], character)
      const expected = []
      expect(actual).to.eql(expected)
    })

    it('should add spaces if previous character', () => {
      const character = {
        character: ' ',
      }
      const previous = [
        {
          character: 'a',
        },
      ]
      const actual = removeInitialSpaces(previous, character)
      const expected = [
        {
          character: 'a',
        },
        {
          character: ' ',
        },
      ]
      expect(actual).to.eql(expected)
    })
  })

  describe('nextNonSpaceIndex', () => {
    it('should jump spaces', () => {
      const currentIndex = 0
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
          character: 'c',
        },
      ]
      const actual = nextNonSpaceIndex(characters, currentIndex)
      const expected = 3
      expect(actual).to.eql(expected)
    })
  })

  describe('getNextIndex', () => {
    it('returns next index', () => {
      const state = {
        currentIndex: 1,
        characters: [
          {},
          {
            character: 'a',
          },
        ],
      }
      const actual = getNextIndex(state)
      const expected = 2
      expect(actual).to.eql(expected)
    })

    it('jumps spaces after new lines', () => {
      const state = {
        currentIndex: 0,
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
            character: 'c',
          },
        ],
      }
      const actual = getNextIndex(state)
      const expected = 3
      expect(actual).to.eql(expected)
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

    it('adds character', () => {
      const state = {
        characters: [
          {
            character: 'a',
          },
        ],
        currentIndex: 0,
      }
      const action = {
        type: 'RECORD',
        key: 'a',
      }
      expect(reducer(state, action))
        .to.have.property('characters')
        .and.to.have.property(0)
        .and.to.have.property('status', 'correct')
    })
  })
})
