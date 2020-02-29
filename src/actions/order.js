export const SET_ORDER_STEP = 'SET_ORDER_STEP';
export const SET_MEAL_OPTION = 'SET_MEAL_OPTION';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_ORDER = 'CLEAR_ORDER';

export const setOrderStep = (step) => dispatch => {
    dispatch({
        type: SET_ORDER_STEP,
        payload: step
    });
}

export const setMealOption = (option) => dispatch => {
    dispatch({
        type: SET_MEAL_OPTION,
        payload: option
    });
}

export const addItem = (type, item) => dispatch => {
    dispatch({
        type: ADD_ITEM,
        payload: { type, item }
    });
}

export const removeItem = (type, item) => dispatch => {
    dispatch({
        type: REMOVE_ITEM,
        payload: { type, item }
    });
}

export const clearOrder = () => dispatch => {
    dispatch({
        type: CLEAR_ORDER
    });
}