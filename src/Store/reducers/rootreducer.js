import user1 from '../../Images/user1.jpg'
import user2 from '../../Images/user2.jpg'
import user3 from '../../Images/user3.jpg'

const intialState = {
    isSideNavOpen: false,
    companyDetails: {
        phone: "08012345678",
        email: "company@mail.com",
        address: "No 1, something street, Highland, Lagos State",
        addressDetails:
        {
            state: "Lagos",
            town: "Lekki"
        },
        branches: [
            "No 2, osmething street, Iwo Road, Ibadan"
        ],
        staffs: [
            {
                designation: "CEO",
                name: "Muhammad Garba"
            },
            {
                designation: "staff",
                name: "Isreal Mark",
                image: user1,
                desc: "Business and Financial expert"
            },
            {
                designation: "staff",
                name: "Mayowa Ireoluwa",
                image: user2,
                desc: "Expert Forex Trader"
            },
            {
                designation: "staff",
                name: "Dwean Sean",
                image: user3,
                desc: "Experienced Business Analyst"
            },
        ]

    },
    blogs: [
        {
            image: "https://source.unsplash.com/random",
            title: "Impact of holidays on the forex market",
            author: "Admin",
            date: "June 13, 2020",
            category: "Funds",
            text: "Difficulty on insensible reasonable in. From as went he they. Preference themselves me as thoroughly partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening newspaper in advantage frankness to concluded unwilling. \nAn so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its. \nSurrounded affronting favourable no mr. Lain knew like half she yet joy. Be than dull as seen very shot. Attachment ye so am travelling estimating projecting is. Off fat address attacks his besides. Suitable settling mr attended no doubtful feelings. Any over for say bore such sold five but hung. "
        },
        {
            image: "https://source.unsplash.com/random",
            title: "Essence Of Investing",
            author: "Admin",
            date: "June 13, 2020",
            category: "Funds",
            text: "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age. Am weather to entered norland no in showing service. Nor repeated speaking shy appetite. Excited it hastily an pasture it observe. Snug hand how dare here too. \nIn entirely be to at settling felicity. Fruit two match men you seven share. Needed as or is enough points. Miles at smart ﻿no marry whole linen mr. Income joy nor can wisdom summer. Extremely depending he gentleman improving intention rapturous as. \nSurrounded affronting favourable no mr. Lain knew like half she yet joy. Be than dull as seen very shot. Attachment ye so am travelling estimating projecting is. Off fat address attacks his besides. Suitable settling mr attended no doubtful feelings. Any over for say bore such sold five but hung. "
        },
        {
            image: "https://source.unsplash.com/random",
            title: "Our New Investment Plans",
            author: "Admin",
            date: "June 13, 2020",
            category: "Funds",
            text: "But why smiling man her imagine married. Chiefly can man her out believe manners cottage colonel unknown. Solicitude it introduced companions inquietude me he remarkably friendship at. My almost or horses period. Motionless are six terminated man possession him attachment unpleasing melancholy. Sir smile arose one share. No abroad in easily relied an whence lovers temper by. Looked wisdom common he an be giving length mr. \nAt every tiled on ye defer do. No attention suspected oh difficult. Fond his say old meet cold find come whom. The sir park sake bred. Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or. \nSaw yet kindness too replying whatever marianne. Old sentiments resolution admiration unaffected its mrs literature. Behaviour new set existence dashwoods. It satisfied to mr commanded consisted disposing engrossed. Tall snug do of till on easy. Form not calm new fail. "
        }
    ]
}

const rootReducer = (state = intialState, action) => {

    const newState = state;

    if (action.type === "TOOGGLESIDEBAR") {
        newState.isSideNavOpen = !state.isSideNavOpen;

    }

    return newState;
}

export default rootReducer;