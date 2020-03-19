import React from 'react';
import { connect } from 'react-redux';
import { View, Textarea, Text } from 'native-base';

import MainDishesIcon from '../../media/images/mainDishesIcon.png';
import SideDishesIcon from '../../media/images/sideDishesIcon.png';
import SaladsIcon from '../../media/images/saladsIcon.png';
import DessertsIcon from '../../media/images/dessertsIcon.png';

import ItemReview from './itemReview';

import { observationChange } from '../../actions/order';

const OrderReview = ({ mainDishes, sideDishes, salads, desserts, observation, observationChange }) => {
    return (
        <View>
            <ItemReview items={mainDishes} icon={MainDishesIcon} />
            <ItemReview items={sideDishes} icon={SideDishesIcon} />
            <ItemReview items={salads} icon={SaladsIcon} />
            <ItemReview items={desserts} icon={DessertsIcon} />
            <Textarea 
                rowSpan={5} 
                bordered 
                placeholder="Observations" 
                value={observation}
                style={{ marginTop: 20 }} 
                onChangeText={observationChange} 
                maxLength={150} />
            <Text style={{ textAlign: "right" }}>Max: {150 - String(observation).replace(/ /g,'').length}</Text>
        </View>
    )
}

function mapStateToProps ({ order }) {
    return {
        mainDishes: order.order.mainDishes,
        sideDishes: order.order.sideDishes,
        salads: order.order.salads,
        desserts: order.order.desserts,
        mealOption: order.mealOption,
        observation: order.observation
    }
}

export default connect(mapStateToProps, { observationChange })(OrderReview);