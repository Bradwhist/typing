// import * as types from './types';
export function changeInput(inputStr) {
    return {
        type: 'CHANGE_INPUT',
        inputStr
    };
}

export function addChar(inputStr, currentIndex, wordList) {
    return {
        type: 'CHAR_ADDED',
        inputStr,
        currentIndex,
        wordList,
    };
}

export function advanceIndex() {
    return {
        type: 'ADVANCE_INDEX',

    };
}

export function nextWord() {
    return {
        type: 'NEXT_WORD',

    };
}

export function startGame() {
    return {
        type: 'START_GAME',
    };
}

export function incrementTimer() {
    return {
        type: 'INCREMENT_TIMER',
    };
}

export function endGame(score, highScores) {
    return {
        type: 'END_GAME',
        score,
        highScores,
    };
}

export function gameInit() {
    return  {
        type: 'GAME_INIT',
    };
}

export function addScore(score, leader) {
    return {
        type: 'ADD_SCORE',
        score,
        leader,
    };
}

export function openMenu() {
    return {
        type: 'OPEN_MENU',
    };
}

export function leaderUpdate(leaderStr) {
    return {
        type: 'LEADER_UPDATE',
        leaderStr,
    };
}
