export default (state = 60, action) => {
    switch(action.type) {
        // case 'CHANGE_INPUT':
        //     const newState = action.inputStr;
        //     return newState;
        case 'START_GAME':
            return 60;
        case 'INCREMENT_TIMER':
            const newState = state - 1;
            return newState;
        case 'END_GAME':
            return 1;
        default:
            return state;
    }
};
