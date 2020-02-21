import axios from "axios";
import { setAlert } from './alert';

export const SET_CURRENT_RESTAURANT = 'SET_CURRENT_RESTAURANT';
export const REMOVE_CURRENT_RESTAURANT = 'REMOVE_CURRENT_RESTAURANT';
export const LOAD_MEAL_OPTIONS = 'LOAD_MEAL_OPTIONS';

const api = 'https://marmitapp-admin.herokuapp.com';

export const setCurrentRestaurant = (restaurant) => dispatch => {
    dispatch({
        type: SET_CURRENT_RESTAURANT,
        payload: { restaurant }
    });
}

export const removeCurrentRestaurant = () => dispatch => {
    dispatch({
        type: REMOVE_CURRENT_RESTAURANT
    });
}

export const loadMealOptions = (restaurantId) => async dispatch => {
    try {
        const mealOptions = await axios.get(`${api}/api/mealOptions/${restaurantId}`);

        dispatch({
            type: LOAD_MEAL_OPTIONS,
            payload: { mealOptions: mealOptions.data.options }
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
    }
}