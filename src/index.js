const prompt = require('prompt');
const spellChecker = require('./spell_checker');

prompt.start();

const schema = {
    properties: {
        dictionary: {
            description: 'Please enter a dictionary',
            pattern: /^(\w*large_dict|small_dict\w*)$/,
            message: 'Enter an available dictionary (large_dict or small_dict)',
            required: true,
        },
        word: {
            description: 'Please enter a word',
            pattern: /^[a-zA-Z]+$/,
            message: 'Enter a word that only contains letters',
            required: true,
        },
    },
};

prompt.get(schema, (err, result) => {
    console.log(spellChecker.spellCheck(result.dictionary, result.word.toLowerCase()));
});
