export default (state = '', action) => {
    switch(action.type) {
        // case 'CHANGE_INPUT':
        //     const newState = action.inputStr;
        //     return newState;
        case 'LEADER_UPDATE':
            return action.leaderStr;
        default:
            return state;
    }
};
