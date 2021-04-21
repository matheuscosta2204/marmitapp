import { 
    SET_ORDER_STEP, 
    SET_MEAL_OPTION, 
    ADD_ITEM, 
    REMOVE_ITEM, 
    CLEAR_ORDER,
    OBSERVATION_CHANGE,
    PAYMENT_WAY_CHANGE
} from '../actions/order';

const initialState = {
    order: {
        mainDishes: [],
        sideDishes: [],
        salads: [],
        desserts: [],
    },
    mealOption: null,
    price: 0,
    observation: '',
    step: 'mealOptions',
    paymentWay: ""
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
                mealOption: payload.option,
                price: payload.price,
                mainDishes: payload.mainDishes,
                sideDishes: payload.sideDishes,
                salads: payload.salads,
                deserts: payload.deserts
            }
        case ADD_ITEM:
            return {
                ...state,
                order: {
                    ...state.order,
                    [payload.type]: [...state.order[payload.type], payload.item],
                },
                price: state.price + payload.price
            }
        case REMOVE_ITEM:
            let list = state.order[payload.type];
            list.splice( list.indexOf(payload.item), 1 );
            return {
                ...state,
                order: {
                    ...state.order,
                    [payload.type]: list
                },
                price: state.price - payload.price
            }
        case OBSERVATION_CHANGE:
            return {
                ...state,
                observation: payload
            }
        case PAYMENT_WAY_CHANGE:
            return {
                ...state,
                paymentWay: payload
            }
        case CLEAR_ORDER:
            return initialState;
        default:
            return state;
    }
}