export default (state = [0, 0], action) => {
    switch(action.type) {
        case 'ADVANCE_INDEX':
            const newState = state.slice();
            // if (action.wordList[newState[0]].length > newState[1] + 1) {
            newState[1] = newState[1] + 1;
            // } else {
            //     newState[1] = 0;
            //     newState[0] = newState[0] + 1;
            // }
            return newState;
        case 'NEXT_WORD':
            const newState2 = state.slice();
            newState2[1] = 0;
            newState2[0] = newState2[0] + 1;
            return newState2;
        case 'START_GAME':
            return [0, 0];
        case 'END_GAME':
            return [0, 0];
        default:
            return state;
    }
};
