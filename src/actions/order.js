export const SET_ORDER_STEP = 'SET_ORDER_STEP';
export const SET_MEAL_OPTION = 'SET_MEAL_OPTION';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_ORDER = 'CLEAR_ORDER';
export const OBSERVATION_CHANGE = 'OBSERVATION_CHANGE';
export const PAYMENT_WAY_CHANGE = 'PAYMENT_WAY_CHANGE';

export const setOrderStep = (step) => dispatch => {
    dispatch({
        type: SET_ORDER_STEP,
        payload: step
    });
}

export const setMealOption = (option, price, mainDishes, sideDishes, salads, deserts) => dispatch => {
    dispatch({
        type: SET_MEAL_OPTION,
        payload: { option, price, mainDishes, sideDishes, salads, deserts }
    });
}

export const addItem = (type, item, price) => dispatch => {
    dispatch({
        type: ADD_ITEM,
        payload: { type, item, price }
    });
}

export const removeItem = (type, item, price) => dispatch => {
    dispatch({
        type: REMOVE_ITEM,
        payload: { type, item, price }
    });
}

export const observationChange = (text) => dispatch => {
    dispatch({
        type: OBSERVATION_CHANGE,
        payload: text
    })
}

export const paymentWayChange = (paymentWay) => dispatch => {
    dispatch({
        type: PAYMENT_WAY_CHANGE,
        payload: paymentWay
    })
}

export const clearOrder = () => dispatch => {
    dispatch({
        type: CLEAR_ORDER
    });
}