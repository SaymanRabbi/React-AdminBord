const DarkModeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
        return {
            ...state,
            darkMode: !state.darkMode,
        }
        case"SET_DARK_MODE":
        return {
            ...state,
            darkMode: true,
        }
        case "SET_LIGHT_MODE":
            return {
                ...state,
                darkMode: false,
            }
        default:
        return state;
    } 
}
export default DarkModeReducer;