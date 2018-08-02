export default (state = 'unstarted', action) => {
    switch(action.type) {
        // case 'CHANGE_INPUT':
        //     const newState = action.inputStr;
        //     return newState;
        case 'START_GAME':
            return 'ready';

        case 'END_GAME':
            const sortedScores = action.highScores.sort((a, b) => b.score - a.score);
            if (sortedScores.length < 10) {
                return 'gameOver';
            }
            if (action.score > sortedScores[9].score) {
                return 'gameOver';
            }
            return 'gameOverNoob';

        case 'ADD_SCORE':
            return 'leaderboard';
        case 'CHAR_ADDED':

            return 'active';
        case 'OPEN_MENU':
            return 'leaderboardAdd';
        default:
            return state;
    }
};
