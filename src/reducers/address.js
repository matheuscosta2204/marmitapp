import { SET_MODAL_VISIBLE } from '../actions/address';

const initialState = {
    modalVisible: false,
    isNew: false
};

export default function address(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case SET_MODAL_VISIBLE:
            return {
                ...state,
                modalVisible: payload.modalVisible,
                isNew: payload.isNew
            };
        default:
            return state;
    }
}