import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import wordListReducer from './wordListReducer.js';
import currentIndexReducer from './currentIndexReducer.js';
import userInputReducer from './userInputReducer.js';
import timeLeftReducer from './timeLeftReducer.js';
import scoreReducer from './scoreReducer.js';
import gameStateReducer from './gameStateReducer.js';
import highScoresReducer from './highScoresReducer.js';
import leaderNameReducer from './leaderNameReducer.js';

const rootReducer = combineReducers({
    wordList: wordListReducer,
    currentIndex: currentIndexReducer,
    userInput: userInputReducer,
    timeLeft: timeLeftReducer,
    score: scoreReducer,
    gameState: gameStateReducer,
    highScores: highScoresReducer,
    leaderName: leaderNameReducer,
    routing: routerReducer // this reducer is used by React Router in Redux
});

export default rootReducer;
