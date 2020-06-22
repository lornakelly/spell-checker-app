# Spell Checker

## Description

This program is a simple spell checker. It prompts user to enter a dictionary and a word and checks the spelling of the word against the dictionary. It returns one of the following 3 console messages.

1. If the word is found, the console will print 'Correct'
2. If the word is not found but a similiar word with 2 or less different letters is found, the console will print the similar word
3. If the word is not found and there is no other similar word, the console will print 'Word not found'

## Prerequisites

You will need to install Node.js and NPM. NPM is automatically installed with node when installed through NVM. Refer to NVM [documentation](https://github.com/nvm-sh/nvm#installation) on installation instructions.

## Install

- Clone the repo `https://git.vizexplorer.com/html5/campaign-manager.git`
- Change directory to `/spell-checker-app`.
- `npm install`.

## Tests

Run tests : `npm test`

## Start program

Change directory to src and run `node index.js`

//for all available dictionaries create list of dictionaries
//Onlt get dictionary words when prompted
//write optiminsations...index array, binary search, for loops
//different prompt library
//get available dictionaries
//add integration tests
//if missing letter then filtered words will fail
//pass in a dictionary wrong name
//Directories to do start script
