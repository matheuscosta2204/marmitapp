import { createStackNavigator } from 'react-navigation-stack';

import FavoritesScreen from '../../screens/favorites/favorites';

const FavoritesStack = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            header: null
        }
    }
});

export default FavoritesStack;