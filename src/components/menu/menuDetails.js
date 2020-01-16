import React from 'react';
import { View, Text } from 'native-base';

import Loader from '../ui/loader/loader';
import MenuItem from './menuItem/menuItem';

import MainDishesIcon from '../../media/images/mainDishesIcon.png';
import SideDishesIcon from '../../media/images/sideDishesIcon.png';
import SaladsIcon from '../../media/images/saladsIcon.png';
import DessertsIcon from '../../media/images/dessertsIcon.png';

import styles from './menuDetails.style';

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
            <Text style={styles.title}>Today's Menu</Text>
            <MenuItem type="Main Dishes" items={menu.mainDishes} icon={MainDishesIcon} />
            <MenuItem type="Side Dishes" items={menu.sideDishes} icon={SideDishesIcon} />
            <MenuItem type="Salads" items={menu.salads} icon={SaladsIcon} />
            <MenuItem type="Desserts" items={menu.desserts} icon={DessertsIcon} />
        </View>
    )
}

export default MenuDetails;