import { createStackNavigator } from 'react-navigation-stack';

import FavoritesScreen from '../../screens/favorites/favorites';
import RestaurantDetailsScreen from '../../screens/restaurant/restaurantDetails';
import OrdersScreen from '../../screens/orders/orders';
import NewOrderScreen from '../../screens/orders/newOrder/newOrder';

const FavoritesStack = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
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
    NewOrder: {
        screen: NewOrderScreen,
        navigationOptions: {
            header: null
        }
    }
});

export default FavoritesStack;