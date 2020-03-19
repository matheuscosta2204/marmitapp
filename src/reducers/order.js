import { 
    SET_ORDER_STEP, 
    SET_MEAL_OPTION, 
    ADD_ITEM, 
    REMOVE_ITEM, 
    CLEAR_ORDER,
    OBSERVATION_CHANGE 
} from '../actions/order';

const initialState = {
    order: {
        mainDishes: [],
        sideDishes: [],
        salads: [],
        desserts: [],
    },
    mealOption: null,
    observation: '',
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
        case ADD_ITEM:
            return {
                ...state,
                order: {
                    ...state.order,
                    [payload.type]: [...state.order[payload.type], payload.item]
                }
            }
        case REMOVE_ITEM:
            let list = state.order[payload.type];
            list.splice( list.indexOf(payload.item), 1 );
            return {
                ...state,
                order: {
                    ...state.order,
                    [payload.type]: list
                }
            }
        case OBSERVATION_CHANGE:
            return {
                ...state,
                observation: payload
            }
        case CLEAR_ORDER:
            return initialState;
        default:
            return state;
    }
}