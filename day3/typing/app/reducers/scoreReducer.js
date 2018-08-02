export default (state = 0, action) => {
    switch(action.type) {
        // case 'CHANGE_INPUT':
        //     const newState = action.inputStr;
        //     return newState;
        case 'START_GAME':
            return 0;
        case 'CHAR_ADDED':
            const newState = state + 0;
            const cWordList = action.wordList;
            const cCurrentIndex = action.currentIndex;
            console.log('wordlist', cWordList, 'index', cCurrentIndex, 'action', action);
            console.log('check', cWordList[cCurrentIndex[0]][cCurrentIndex[1]].letter, 'against', action.inputStr);
            if (cWordList[cCurrentIndex[0]][cCurrentIndex[1]].letter === action.inputStr) {
                return newState + 1;
            }

            return newState - 1;

        case 'END_GAME':
            return state;
        default:
            return state;
    }
};
