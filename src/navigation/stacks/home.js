import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../../screens/home/home';

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    }
});

export default HomeStack;