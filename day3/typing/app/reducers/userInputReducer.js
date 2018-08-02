export default (state = '', action) => {
    console.log('userInputReducer', action);
    switch(action.type) {
        case 'CHANGE_INPUT':
            const newState = action.inputStr;
            return newState;
        default:
            return state;
    }
};
