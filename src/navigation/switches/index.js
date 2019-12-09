import { createSwitchNavigator } from 'react-navigation';

import Auth from '../../components/auth/auth';
import Tabs from '../tabs/tabs';
import Login from '../stacks/login';

export default createSwitchNavigator({
    Auth,
    Tabs,
    Login
}, {
    initialRouteName: 'Auth'
});