import { SET_CURRENT_RESTAURANT, REMOVE_CURRENT_RESTAURANT, LOAD_MEAL_OPTIONS, LOAD_RESTAURANT_MENU } from '../actions/restaurant';

const initialState = {
    current: {},
    mealOptions: [],
    menu: {
        mainDishes: [],
        sideDishes: [],
        salads: [],
        desserts: []
    }
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
        case LOAD_RESTAURANT_MENU:
            return {
                ...state,
                menu: payload
            }
        default:
            return state;
    }
}