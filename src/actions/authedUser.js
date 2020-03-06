import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';
import AsyncStorage from '@react-native-community/async-storage';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const FAVORITE_CHANGE_SUCCESS = 'FAVORITE_CHANGE_SUCCESS';

const api = 'https://marmitapp-admin.herokuapp.com';

// LOAD USER
export const loadUser = () => async dispatch => {
    const token = await AsyncStorage.getItem('token');

    if(token) {
        setAuthToken(token);
    }

    try {
        const res = await axios.get(`${api}/api/auth/users`);

        dispatch({
            type: USER_LOADED,
            payload: { data: res.data, token }
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}

// REGISTER USER
export const register = ({ email, name, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, name, password });

    try {
        const res = await axios.post(`${api}/api/users`, body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
}

// LOGIN USER
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`${api}/api/auth/users`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
}

// LOGOUT / CLEAR PROFILE
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
}

// HANDLE CHANGES USERS FAVORITES RESTAURANTS
export const favoriteChanges = (restaurantId, type)  => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ restaurantId, type });

    try {
        const res = await axios.put(`${api}/api/users/favorites`, body, config);

        dispatch({
            type: FAVORITE_CHANGE_SUCCESS,
            payload: { favorites: res.data }
        })
    } catch (err) {
        const errors = err.response.data.errors;
        
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
    }
}