import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'native-base';

import MainDishesIcon from '../../media/images/mainDishesIcon.png';
import SideDishesIcon from '../../media/images/sideDishesIcon.png';
import SaladsIcon from '../../media/images/saladsIcon.png';
import DessertsIcon from '../../media/images/dessertsIcon.png';

import ItemReview from './itemReview';

const OrderReview = ({ mainDishes, sideDishes, salads, desserts, mealOption }) => {
    console.log(mainDishes, sideDishes, salads, desserts);
    return (
        <View>
            <ItemReview items={mainDishes} icon={MainDishesIcon} />
            <ItemReview items={sideDishes} icon={SideDishesIcon} />
            <ItemReview items={salads} icon={SaladsIcon} />
            <ItemReview items={desserts} icon={DessertsIcon} />
        </View>
    )
}

function mapStateToProps ({ order }) {
    return {
        mainDishes: order.order.mainDishes,
        sideDishes: order.order.sideDishes,
        salads: order.order.salads,
        desserts: order.order.desserts,
        mealOption: order.mealOption
    }
}

export default connect(mapStateToProps)(OrderReview);