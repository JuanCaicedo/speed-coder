import { expect } from 'chai'
import { addCharacter } from '.'

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
})
