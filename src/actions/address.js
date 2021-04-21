export const SET_MODAL_VISIBLE = 'SET_MODAL_VISIBLE';

export const setModalVisible = (modalVisible, isNew = false) => dispatch => {
    // TOAST ALERT ALREADY HAVE DEADLINE TO GET CLOSED
    dispatch({
        type: SET_MODAL_VISIBLE,
        payload: { modalVisible, isNew }
    });
}