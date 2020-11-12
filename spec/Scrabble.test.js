import Scrabble from "../src/Scrabble";

describe('Scrabble', () => {
  test('It returns 0 if the string is empty', () => {
    const scrabble = new Scrabble('')
    expect(scrabble.score).toBe(0)
  })
})