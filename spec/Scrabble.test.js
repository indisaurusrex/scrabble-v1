import Scrabble from "../src/Scrabble";

describe('Scrabble', () => {
  test('It returns 0 if the string is empty', () => {
    const scrabble = new Scrabble('')
    expect(scrabble.score).toBe(0)
  })
  test('Successfully returns 1 if the string is a', () => {
    const scrabble = new Scrabble('a')
    expect(scrabble.score).toBe(1)
  })
  test('Successfully returns 4 if the string is f', () => {
    const scrabble = new Scrabble('f')
    expect(scrabble.score).toBe(4)
  })
})