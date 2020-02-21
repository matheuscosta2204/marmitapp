import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../../screens/home/home';
import RestaurantDetailsScreen from '../../screens/restaurant/restaurantDetails';
import OrdersScreen from '../../screens/orders/orders';
import NewOrderScreen from '../../screens/orders/newOrder/newOrder';

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
    },
    Orders: {
        screen: OrdersScreen,
        navigationOptions: {
            header: null
        }
    },
    NewOrder: {
        screen: NewOrderScreen,
        navigationOptions: {
            header: null
        }
    }
});

export default HomeStack;