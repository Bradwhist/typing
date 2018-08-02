import wordList from '../dictionary.js';
import _ from 'underscore';

let shuffledWords = _.shuffle(wordList);
shuffledWords = shuffledWords.slice(0, 100);
const initialWords = [];
for (let i = 0; i < shuffledWords.length; i ++ ) {
    initialWords.push([]);
    for (let j = 0; j < shuffledWords[i].length; j ++) {
        initialWords[i].push({letter: shuffledWords[i][j], status: 'pending'});
    }
}
export default (state = initialWords, action) => {
    console.log('in wordlist reducer', state, action);
    switch(action.type) {
        case 'CHAR_ADDED':
            const newState = state.slice();
            if (!newState[action.currentIndex[0]][action.currentIndex[1]]) {
                return state;
            } else if (newState[action.currentIndex[0]][action.currentIndex[1]].letter === action.inputStr) {
                newState[action.currentIndex[0]][action.currentIndex[1]].status = 'correct';
            } else {
                newState[action.currentIndex[0]][action.currentIndex[1]].status = 'incorrect';
            }
            return newState;
        case 'SUBMIT_WORD':
            const newState2 = [];
            for (let i = 0; i < action.word.length; i ++) {
                newState2.push({letter: action.word[i].toUpperCase(), guessed: false});
            }
            return newState2;
        case 'START_GAME':
            let newShuffledWords = _.shuffle(wordList);
            newShuffledWords = newShuffledWords.slice(0, 100);
            const newInitialWords = [];
            for (let i = 0; i < newShuffledWords.length; i ++ ) {
                newInitialWords.push([]);
                for (let j = 0; j < newShuffledWords[i].length; j ++) {
                    newInitialWords[i].push({letter: newShuffledWords[i][j], status: 'pending'});
                }
            }
            return newInitialWords;
        default:
            return state;
    }
};
