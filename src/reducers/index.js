import { combineReducers } from 'redux';
import auth from './authedUser';
import favorites from './favorites';

export default combineReducers({
    auth,
    favorites
});