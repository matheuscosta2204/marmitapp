export const SET_MODAL_VISIBLE = 'SET_MODAL_VISIBLE';

export const setModalVisible = (modalVisible) => dispatch => {
    // TOAST ALERT ALREADY HAVE DEADLINE TO CLOSE
    dispatch({
        type: SET_MODAL_VISIBLE,
        payload: modalVisible
    });
}
