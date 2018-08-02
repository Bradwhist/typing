export default (state = [{name: 'brad', score: 712}], action) => {
    switch(action.type) {
        // case 'CHANGE_INPUT':
        //     const newState = action.inputStr;
        //     return newState;
        case 'ADD_SCORE':
            const newState = state.slice();
            newState.push({score: action.score, name: action.leader});
            return newState;
        default:
            return state;
    }
};
