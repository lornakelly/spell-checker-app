# Spell Checker

## Description

This program is a simple spell checker. It prompts user to enter a dictionary and a word and checks the spelling against the dictionary. It returns one of the following 3 messages.

1. If the word is found, the console will print 'Correct'
2. If the word is not found but a similiar word with 2 or less different letters is found, the console will print the similar word
3. If the word is not found and there is no other similar word, the console will print 'Word not found'

## Prerequisites

You will need to install Node.js and NPM. NPM is automatically installed with node when installed through NVM. Refer to NVM [documentation](https://github.com/nvm-sh/nvm#installation) on installation instructions.

## Install

- Clone the repo `https://github.com/lornakelly/spell_checker.git`
- Change directory to `/spell-checker-app`.
- `npm install`.

## Tests

Run `npm test`

## Start program

- Change directory to `src`
- `node index.js`
