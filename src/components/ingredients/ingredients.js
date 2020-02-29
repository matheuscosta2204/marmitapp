import React from 'react';
import { View, Text, Button } from 'native-base';
import { connect } from 'react-redux';

import MainDishesIcon from '../../media/images/mainDishesIcon.png';
import SideDishesIcon from '../../media/images/sideDishesIcon.png';
import SaladsIcon from '../../media/images/saladsIcon.png';
import DessertsIcon from '../../media/images/dessertsIcon.png';

import IngredientsItem from './ingredient';
import styles from './ingredients.style';

import { setOrderStep } from '../../actions/order';

const Ingredients = ({ menu, setOrderStep }) => {
    return (
        <View>
            <IngredientsItem type="mainDishes" title="Main Dishes" items={menu.mainDishes} icon={MainDishesIcon} />
            <IngredientsItem type="sideDishes" title="Side Dishes" items={menu.sideDishes} icon={SideDishesIcon} />
            <IngredientsItem type="salads" title="Salads" items={menu.salads} icon={SaladsIcon} />
            <IngredientsItem type="desserts" title="Desserts" items={menu.desserts} icon={DessertsIcon} />
            <View style={styles.buttonContainer} >
                <Button full onPress={() => setOrderStep('review')}>
                    <Text>Finish Order</Text>
                </Button>
            </View>
        </View>
    )
};

function mapStateToProps ({ restaurant }) {
    return {
        menu: restaurant.menu
    }
}

export default connect(mapStateToProps, { setOrderStep })(Ingredients);