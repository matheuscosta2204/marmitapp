import { createStackNavigator } from 'react-navigation-stack';

import OrdersScreen from '../../screens/orders/orders';

const OrderStack = createStackNavigator({
    Orders: {
        screen: OrdersScreen,
        navigationOptions: {
            header: null
        }
    }
});

export default OrderStack;