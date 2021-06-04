const intialState = {
    isSideNavOpen: false
}

const rootReducer = (state = intialState, action) => {

    const newState = state;

    if (action.type === "TOOGGLESIDEBAR") {
        newState.isSideNavOpen = !state.isSideNavOpen;

    }

    return newState;
}

export default rootReducer;