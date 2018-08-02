import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import TextBox from '../components/TextBox.js';
import { changeInput, addChar, advanceIndex, nextWord, startGame, incrementTimer, endGame, gameInit, addScore, openMenu, leaderUpdate } from '../actions/index';
import InfoBox from '../components/InfoBox.js';
import Leaderboard from '../components/Leaderboard.js';

class GameContainer extends React.Component {

    onInput = (inputStr) => {
        if (!this.props.currentIndex[0] && !this.props.currentIndex[1]) {
            // this.props.startGameFn();
            // this.props.gameInitFn();
            this.interval = setInterval(() => {
    // dispatch DECREMENT_TIMER action
                this.props.incrementTimerFn();
                if (this.props.timeLeft === 0) {
        // dispatch END_GAME action
                    this.props.endGameFn(this.props.score, this.props.highScores);
                    clearInterval(this.interval);
                }
            }, 1000);
        }
        if (inputStr !== ' ') {
            this.props.changeInputFn(inputStr);
            this.props.addCharFn(inputStr, this.props.currentIndex, this.props.wordList);
            this.props.advanceIndexFn();
        } else {
            console.log('detected');
            // this.props.changeInputFn(inputStr);
            // this.props.addCharFn(inputStr, this.props.currentIndex);
            // this.props.advanceIndexFn(this.props.wordList);
            this.props.nextWordFn();
        }
    }
    addScoreFinal = () => {
        return this.props.addScoreFn(this.props.score, this.props.leaderName);
    }

    render() {
        let input;
        const displayWords = [];
        for (let i = 0; i < this.props.wordList.length; i ++) {
            for (let j = 0; j < this.props.wordList[i].length; j ++) {
                displayWords.push(this.props.wordList[i][j]);
            }
            displayWords.push({letter: ' ', status: 'blank'});
        }
        return (
            <div>
              <div>
                { displayWords.map(ele => {
                    if (ele.status === 'incorrect') {
                        return <span style={{'color': 'red'}}>{ele.letter}</span>;
                    } else if (ele.status === 'correct') {
                        return <span style={{'color': 'blue'}}>{ele.letter}</span>;
                    }
                    return <span style={{'color': 'grey'}}>{ele.letter}</span>;
                }) }
                <TextBox inputValue={this.props.userInput} onInput={this.onInput}/>
              </div>

                {this.props.gameState === 'unstarted' ?
                <button onClick={this.props.startGameFn}>Start Game</button>
                : null }
                {this.props.gameState === 'ready' ?
                <div>

                <InfoBox score={this.props.score} TimeLeft={this.props.timeLeft}/>
                <button onClick={() => this.props.endGameFn(this.props.score, this.props.highScores)}>End Game</button>
                </div>
                : null }
                {this.props.gameState === 'active' ?
                <div>

                <InfoBox score={this.props.score} TimeLeft={this.props.timeLeft}/>
                <button onClick={() => this.props.endGameFn(this.props.score, this.props.highScores)}>End game</button>
                </div>
                : null }
                {this.props.gameState === 'gameOver' ?
                <div>

                <InfoBox score={this.props.score} TimeLeft={this.props.timeLeft}/>
                <button onClick={this.props.openMenuFn}>Add Score to Leaderboard</button>
                <button onClick={this.props.startGameFn}>New Game</button>
                </div>
                : null }
                {this.props.gameState === 'gameOverNoob' ?
                <div>

                <InfoBox score={this.props.score} TimeLeft={this.props.timeLeft}/>
                <button onClick={this.props.startGameFn}>New Game</button>
                </div>
                : null }
                {this.props.gameState === 'leaderboardAdd' ?
                <div>
                 <input type="text"
                   // value={this.props.leaderName}

                   onChange={(e) => {this.props.leaderUpdateFn(e.target.value);} }
                 />
               <button onClick={this.addScoreFinal}>Submit</button>

                </div>
                : null }
                {this.props.gameState === 'leaderboard' ?
                <div>
                <Leaderboard highScores={this.props.highScores}/>
                <button onClick={this.props.startGameFn}>New Game</button>
                </div>
                : null }

              </div>
        );
    }
}
// onInput={this.onInput()}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    onInput: PropTypes.func,
    userInput: PropTypes.string,
    currentIndex: PropTypes.array,
    changeInputFn: PropTypes.func,
    addCharFn: PropTypes.func,
    advanceIndexFn: PropTypes.func,
    nextWordFn: PropTypes.func,
    timeLeft: PropTypes.number,
    startGameFn: PropTypes.func,
    endGameFn: PropTypes.func,
    incrementTimerFn: PropTypes.func,
    score: PropTypes.number,
    gameState: PropTypes.string,
    gameInitFn: PropTypes.func,
    highScores: PropTypes.array,
    addScoreFn: PropTypes.func,
    openMenuFn: PropTypes.func,
    leaderUpdateFn: PropTypes.func,
    leaderName: PropTypes.string,
};

const mapStateToProps = ({wordList, userInput, currentIndex, timeLeft, score, gameState, highScores, leaderName}) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList,
        userInput,
        currentIndex,
        timeLeft,
        score,
        gameState,
        highScores,
        leaderName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputFn: (inputStr) => {
            dispatch(changeInput(inputStr));
        },
        addCharFn: (inputStr, currentIndex, wordList) => {
            dispatch(addChar(inputStr, currentIndex, wordList));
        },
        advanceIndexFn: () => {
            dispatch(advanceIndex());
        },
        nextWordFn: () => {
            dispatch(nextWord());
        },
        startGameFn: () => {
            dispatch(startGame());
        },
        endGameFn: (score, highScores) => {
            dispatch(endGame(score, highScores));
        },
        incrementTimerFn: () => {
            dispatch(incrementTimer());
        },
        gameInitFn: () => {
            dispatch(gameInit());
        },
        addScoreFn: (newScore, newLeader) => {
            dispatch(addScore(newScore, newLeader));
        },
        openMenuFn: () => {
            dispatch(openMenu());
        },
        leaderUpdateFn: (leaderStr) => {
            dispatch(leaderUpdate(leaderStr));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
