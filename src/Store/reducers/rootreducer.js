const intialState = {
    isSideNavOpen: false, 
    companyDetails:{
        phone: "08012345678", 
        email: "company@mail.com", 
        address: "No 1, something street, Highland, Lagos State",
        staffs: [
            {
                designation: "CEO", 
                name: "Muhammad Garba"
            }
        ]
    }
}

const rootReducer = (state = intialState, action) => {

    const newState = state;

    if (action.type === "TOOGGLESIDEBAR") {
        newState.isSideNavOpen = !state.isSideNavOpen;

    }

    return newState;
}

export default rootReducer;