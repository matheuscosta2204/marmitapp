import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../../screens/login/login';

const LoginStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    }
});

export default LoginStack;