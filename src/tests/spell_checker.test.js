const spellChecker = require('../spell_checker');
const fs = require('fs');

jest.mock('fs');

const mockDictionary =
  'and\ncat\ncar\nis\nthe\nplayful\nsweet\nwonderful\nvery\nnotaword';

describe('lookup', () => {
  beforeEach(() => {
    fs.readFileSync.mockReturnValue(mockDictionary);
  });

  it('should return "Correct" when word is found in dictionary', () => {
    expect(spellChecker.spellCheck('small_dict', 'playful')).toBe('Correct');
  });

  it('should return "Word not found" when no suggested word with 2 or less mistakes is found', () => {
    expect(spellChecker.spellCheck('small_dict', 'notarilword')).toBe(
      'Word not found'
    );
  });

  it('should return a suggested word', () => {
    expect(spellChecker.spellCheck('small_dict', 'playfil')).toBe('playful');
  });

  it('should return a suggested word with the least number of mistakes when there are multiple possiblities', () => {
    expect(spellChecker.spellCheck('small_dict', 'cir')).toBe('car');
  });
});
