import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../../screens/login/login';
import ForgotPasswordScreen from '../../screens/forgotPassword/forgotPassword';
import RegisterScreen from '../../screens/register/register';

const LoginStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    ForgotPassword: {
        screen: ForgotPasswordScreen,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: {
            header: null
        }
    }
}, 
{
    initialRouteName: "Login"
});

export default LoginStack;