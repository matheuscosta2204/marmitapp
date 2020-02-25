export const SET_ORDER_STEP = 'SET_ORDER_STEP';
export const SET_MEAL_OPTION = 'SET_MEAL_OPTION';
export const SET_MAIN_DISHES = 'SET_MAIN_DISHES';
export const SET_SIDE_DISHES = 'SET_SIDE_DISHES';
export const SET_SALADS = 'SET_SALADS';
export const SET_DESSERTS = 'SET_DESSERTS';
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

export const setMainDishes = (mainDish) => dispatch => {
    dispatch({
        type: SET_MAIN_DISHES,
        payload: mainDish
    });
}

export const setSideDishes = (sideDish) => dispatch => {
    dispatch({
        type: SET_SIDE_DISHES,
        payload: sideDish
    });
}

export const setSalads = (salad) => dispatch => {
    dispatch({
        type: SET_SALADS,
        payload: salad
    });
}

export const setDesserts = (dessert) => dispatch => {
    dispatch({
        type: SET_DESSERTS,
        payload: dessert
    });
}

export const clearOrder = () => dispatch => {
    dispatch({
        type: CLEAR_ORDER
    });
}