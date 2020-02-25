import React from 'react';
import { View, Text } from 'native-base';
import { connect } from 'react-redux';

import MainDishesIcon from '../../media/images/mainDishesIcon.png';
import SideDishesIcon from '../../media/images/sideDishesIcon.png';
import SaladsIcon from '../../media/images/saladsIcon.png';
import DessertsIcon from '../../media/images/dessertsIcon.png';

import IngredientsItem from './ingredient';

const Ingredients = ({ menu }) => {
    return (
        <View>
            <IngredientsItem type="Main Dishes" items={menu.mainDishes} icon={MainDishesIcon} />
            <IngredientsItem type="Side Dishes" items={menu.sideDishes} icon={SideDishesIcon} />
            <IngredientsItem type="Salads" items={menu.salads} icon={SaladsIcon} />
            <IngredientsItem type="Desserts" items={menu.desserts} icon={DessertsIcon} />
        </View>
    )
};

function mapStateToProps ({ restaurant }) {
    return {
        menu: restaurant.menu
    }
}

export default connect(mapStateToProps)(Ingredients);