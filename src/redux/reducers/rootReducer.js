import { ADD_ARTICLE } from "../actions/actionTypes";

const initialState = {
    navItems: [
        {id: 1, name: "Home", path: "/#/"},
        {id: 2,  name: "About", path: "/#/about"},
    ],
    articles: [],

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { 
                ...state,
                articles: [...state.articles, action.payload]
            };
        default:
            return state;
    }
};
export default rootReducer;