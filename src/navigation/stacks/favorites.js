import { createStackNavigator } from 'react-navigation-stack';

import FavoritesScreen from '../../screens/favorites/favorites';
import RestaurantDetailsScreen from '../../screens/restaurant/restaurantDetails';

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
    }
});

export default FavoritesStack;