import { 
    SET_ORDER_STEP, 
    SET_MEAL_OPTION, 
    SET_MAIN_DISHES, 
    SET_SIDE_DISHES, 
    SET_SALADS, 
    SET_DESSERTS, 
    CLEAR_ORDER 
} from '../actions/order';

const initialState = {
    order: {
        mainDishes: [],
        sideDishes: [],
        salads: [],
        desserts: [],
    },
    mealOption: null,
    step: 'mealOptions'
};

export default function order(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case SET_ORDER_STEP:
            return {
                ...state,
                step: payload
            };
        case SET_MEAL_OPTION:
            return {
                ...state,
                mealOption: payload
            }
        case SET_MAIN_DISHES:
            return {
                ...state,
                order: {
                    ...order,
                    mainDishes: [...order.mainDishes, payload]
                }
            }
        case SET_SIDE_DISHES:
            return {
                ...state,
                order: {
                    ...order,
                    sideDishes: [...order.sideDishes, payload]
                }
            }
        case SET_SALADS:
            return {
                ...state,
                order: {
                    ...order,
                    salads: [...order.salads, payload]
                }
            }
        case SET_DESSERTS:
            return {
                ...state,
                order: {
                    ...order,
                    desserts: [...order.desserts, payload]
                }
            }
        case CLEAR_ORDER:
            return initialState;
        default:
            return state;
    }
}