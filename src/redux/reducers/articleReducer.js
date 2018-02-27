import { articleConstants } from '../actions/actionConstants';

export function articles(state = { items: [] }, action) {
    switch (action.type) {
        case articleConstants.ADD_ARTICLE:
        console.log({...state});
            return {
                ...state,
                items: [...state.items, action.article]
            };
        default:
            return state;
    }
}