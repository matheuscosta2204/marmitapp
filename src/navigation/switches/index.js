import { createSwitchNavigator } from 'react-navigation';

import Auth from '../../components/auth/auth';
import Home from '../stacks/home';
import Login from '../stacks/login';

export default createSwitchNavigator({
    Auth,
    Home,
    Login
}, {
    initialRouteName: 'Auth'
});