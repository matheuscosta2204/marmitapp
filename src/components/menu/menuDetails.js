import React from 'react';
import { View, Text } from 'native-base';

import Loader from '../ui/loader/loader';
import styles from './menuDetails.style';
import MenuItem from './menuItem/menuItem';

const MenuDetails = ({ loading, menu }) => {
    
    if(loading) {
        return <Loader loading={loading} />;
    }

    if(Object.keys(menu).length <= 0) {
        return (
            <View>
                <Text>There is not published menu for today yet!</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>Today's Menu</Text>
            <MenuItem type="Main Dishes" items={menu.mainDishes} />
            <MenuItem type="Side Dishes" items={menu.sideDishes} />
            <MenuItem type="Salads" items={menu.salads} />
            <MenuItem type="Desserts" items={menu.desserts} />
        </View>
    )
}

export default MenuDetails;