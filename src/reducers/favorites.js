import { ADD_FAVORITE, REMOVE_FAVORITE, LOAD_FAVORITE } from '../actions/favorites';

const initialState = [];

export default function favorites(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case LOAD_FAVORITE:
            return payload.restaurants;
        case ADD_FAVORITE:
            return [...state, payload.restaurant];
        case REMOVE_FAVORITE:
            console.log(state.filter(favorite => favorite._id !== payload.id));
            return state.filter(favorite => favorite._id !== payload.id);
        default:
            return state;
    }
}