import { expect } from 'chai'
import reducer, {
  addCharacter,
  getNextIndex,
  nextNonSpaceIndex,
  previousNonSpaceIndex,
  removeInitialSpaces,
  characters,
  currentIndex,
} from '.'

describe('reducers', () => {
  describe('addCharacter', () => {
    it('updates correct character', () => {
      const characters = [
        {},
        {
          character: 'x',
        },
        {},
      ]
      const key = 'x'
      const currentIndex = 1
      expect(addCharacter(characters, key, currentIndex))
        .to.have.property(1)
        .and.to.eql({
          character: 'x',
          status: 'correct',
        })
    })

    it('updates enter', () => {
      const characters = [
        {},
        {
          character: 'x',
        },
        {},
      ]
      const key = 'x'
      const currentIndex = 1
      expect(addCharacter(characters, key, currentIndex))
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

  describe('previousNonSpaceIndex', () => {
    it('jumps spaces after new line', () => {
      const currentIndex = 3
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
      const actual = previousNonSpaceIndex(characters, currentIndex)
      const expected = 0
      expect(actual).to.eql(expected)
    })

    it('keeps spaces between other characters', () => {
      const currentIndex = 3
      const characters = [
        {
          character: 'a',
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
      const actual = previousNonSpaceIndex(characters, currentIndex)
      const expected = 2
      expect(actual).to.eql(expected)
    })
  })

  describe('getNextIndex', () => {
    it('returns next index', () => {
      const currentIndex = 1
      const characters = [
        {},
        {
          character: 'a',
        },
      ]
      const actual = getNextIndex(characters, currentIndex)
      const expected = 2
      expect(actual).to.eql(expected)
    })

    it('jumps spaces after new lines', () => {
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
      const actual = getNextIndex(characters, currentIndex)
      const expected = 3
      expect(actual).to.eql(expected)
    })
  })

  describe('characters', () => {
    it('updates snippet with new characters', () => {
      const action = {
        type: 'UPDATE_SNIPPET',
        snippet: 't',
      }
      const actual = characters({}, action)
      expect(actual).to.eql([
        {
          character: 't',
        },
      ])
    })
  })
})
// it.only('skips initial spaces backspace', () => {
