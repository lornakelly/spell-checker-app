const fs = require('fs');

const getDictionary = (name) =>
  fs.readFileSync(`./dictionaries/${name}.txt`, 'utf-8');

const createDictionaryWithIndex = (dictionary) =>
  dictionary.reduce((acc, word) => {
    acc.hasOwnProperty(word.charAt(0))
      ? acc[word.charAt(0)].push(word)
      : (acc[word.charAt(0)] = [word]);
    return acc;
  }, []);

const getSuggestedWord = (filteredDictionary, word) => {
  // Get words with two or less mistakes
  const suggestions = filteredDictionary.reduce((acc, dictionaryWord) => {
    let unmatchedLetterCount = 0,
      i = 0;
    while (i <= word.length) {
      if (dictionaryWord.charAt(i) !== word.charAt(i)) unmatchedLetterCount++;
      i++;
    }
    if (unmatchedLetterCount <= 2)
      acc.push({ errors: unmatchedLetterCount, word: dictionaryWord });
    unmatchedLetterCount = 0;
    return acc;
  }, []);

  if (suggestions.length > 0) {
    // Return first word with one mistake or return first word in array
    const oneError = suggestions.find((s) => s.errors === 1);
    return oneError ? oneError.word : suggestions[0].word;
  } else return '';
};

const lookupWord = (filteredDictionary, word) => {
  const result = filteredDictionary.includes(word)
    ? 'Correct'
    : getSuggestedWord(filteredDictionary, word);

  return result ? result : 'Word not found';
};

const spellCheck = (dictName, word) => {
  const dictionary = getDictionary(dictName).split('\n');
  const indexedDictionary = createDictionaryWithIndex(dictionary);
  const filteredDictionary = indexedDictionary[word.charAt(0)].filter(
    (dictWord) => dictWord.length === word.length
  );
  return lookupWord(filteredDictionary, word);
};

module.exports = { spellCheck };
