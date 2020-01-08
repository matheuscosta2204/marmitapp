import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../../screens/home/home';
import RestaurantDetailsScreen from '../../screens/restaurant/restaurantDetails';

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    RestaurantDetails: {
        screen: RestaurantDetailsScreen,
        navigationOptions: {
            header: null
        }
    }
});

export default HomeStack;