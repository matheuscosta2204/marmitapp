import { SET_CURRENT_RESTAURANT, REMOVE_CURRENT_RESTAURANT, LOAD_MEAL_OPTIONS } from '../actions/restaurant';

const initialState = {
    current: {},
    mealOptions: []
};

export default function restaurant(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case SET_CURRENT_RESTAURANT:
            return {
                ...state,
                current: payload.restaurant
            };
        case REMOVE_CURRENT_RESTAURANT:
            return {
                ...state,
                current: {}
            };
        case LOAD_MEAL_OPTIONS:
            return {
                ...state,
                mealOptions: payload.mealOptions
            };
        default:
            return state;
    }
}