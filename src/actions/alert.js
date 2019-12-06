export const SET_ALERT = 'SET_ALERT';

export const setAlert = (msg, alertType) => dispatch => {
    // TOAST ALERT ALREADY HAVE DEADLINE TO CLOSE
    dispatch({
        type: SET_ALERT,
        payload: {msg, alertType}
    });
}