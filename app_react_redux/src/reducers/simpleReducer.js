export default (state = {}, action) => {
    switch (action.type) {
        case 'DISPLAY_TEXT':
            return {
                result: action.payload
            }
        case 'CONVERT':
            return {
                ...state,
                input: action.input,
            };
        default:
            return state
    }
}
