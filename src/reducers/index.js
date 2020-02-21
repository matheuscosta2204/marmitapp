import { combineReducers } from 'redux';
import auth from './authedUser';
import favorites from './favorites';
import restaurant from './restaurant';

export default combineReducers({
    auth,
    favorites,
    restaurant
});