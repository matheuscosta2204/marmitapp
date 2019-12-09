import { createStackNavigator } from 'react-navigation-stack';

import UserScreen from '../../screens/user/user';

const UserStack = createStackNavigator({
    User: {
        screen: UserScreen,
        navigationOptions: {
            header: null
        }
    }
});

export default UserStack;