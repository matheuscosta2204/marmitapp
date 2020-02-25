import { combineReducers } from 'redux';
import auth from './authedUser';
import favorites from './favorites';
import restaurant from './restaurant';
import order from './order';

export default combineReducers({
    auth,
    favorites,
    restaurant,
    order
});