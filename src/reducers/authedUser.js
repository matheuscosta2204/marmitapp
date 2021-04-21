import { 
        REGISTER_SUCCESS, 
        REGISTER_FAIL, 
        USER_LOADED, 
        AUTH_ERROR, 
        LOGIN_SUCCESS, 
        LOGIN_FAIL, 
        LOGOUT, 
        FAVORITE_CHANGE_SUCCESS, 
        SAVE_ADDRESS 
} from '../actions/authedUser';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    token: null, // not possible initialize because of async way that AsyncStorage handle with local storage;
    isAuthenticated: null,
    loading: true,
    user: {
        favorites: []
    }
}

export default function auth (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case USER_LOADED:
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                loading: false,
                user: payload.data
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            AsyncStorage.multiSet([['token', String(payload.token)], ['isAuthenticated', '1']]);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case FAVORITE_CHANGE_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    favorites: payload.favorites
                }
            }
        case SAVE_ADDRESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    address: payload.address
                }
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            AsyncStorage.removeItem(['token', 'isAuthenticated']);
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}