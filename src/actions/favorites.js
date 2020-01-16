export const LOAD_FAVORITE = 'LOAD_FAVORITE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const loadFavorites = (restaurants) => dispatch => {
    dispatch({
        type: LOAD_FAVORITE,
        payload: { restaurants }
    });
}

export const addFavorite = (restaurant) => dispatch => {
    dispatch({
        type: ADD_FAVORITE,
        payload: {restaurant}
    });
}

export const removeFavorite = (id) => dispatch => {
    dispatch({
        type: REMOVE_FAVORITE,
        payload: {id}
    });
}