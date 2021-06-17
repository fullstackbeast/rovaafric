import user1 from '../../Images/user1.jpg'
import user2 from '../../Images/user2.jpg'
import user3 from '../../Images/user3.jpg'

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
            },
            {
                designation : "staff", 
                name: "Isreal Mark", 
                image : user1,
                desc: "Business and Financial expert"
            },
            {
                designation : "staff", 
                name: "Mayowa Ireoluwa", 
                image : user2,
                desc: "Expert Forex Trader"
            },
            {
                designation : "staff", 
                name: "Dwean Sean", 
                image : user3,
                desc: "Experienced Business Analyst"
            },
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