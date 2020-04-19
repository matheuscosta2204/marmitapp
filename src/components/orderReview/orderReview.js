import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { View, Textarea, Text } from 'native-base';

import MainDishesIcon from '../../media/images/mainDishesIcon.png';
import SideDishesIcon from '../../media/images/sideDishesIcon.png';
import SaladsIcon from '../../media/images/saladsIcon.png';
import DessertsIcon from '../../media/images/dessertsIcon.png';

import Address from '../orderAddres/orderAdress';
import ItemReview from './itemReview';
import styles from './orderReview.style';
import { observationChange } from '../../actions/order';
import NewAddressModal from '../orderAddres/newAddressModal';

const OrderReview = ({ mainDishes, sideDishes, salads, desserts, observation, observationChange, price }) => {
    return (
        <View>
            <NewAddressModal />
            <ItemReview items={mainDishes} icon={MainDishesIcon} />
            <ItemReview items={sideDishes} icon={SideDishesIcon} />
            <ItemReview items={salads} icon={SaladsIcon} />
            <ItemReview items={desserts} icon={DessertsIcon} />
            <Textarea 
                rowSpan={5} 
                bordered 
                placeholder="Observations" 
                value={observation}
                style={styles.textArea} 
                onChangeText={observationChange} 
                maxLength={150} />
            <Text style={styles.obsLength}>Max: {150 - String(observation).replace(/ /g,'').length}</Text>
            <Text style={styles.priceText}>Price: R${price.toFixed(2)}</Text>
            <Address />
            <TouchableOpacity 
                style={styles.loginButton}
                onPress={() => alert("Finishing Order")}>
                <Text style={styles.buttonText}>SEND</Text>
            </TouchableOpacity>
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
        observation: order.observation,
        price: order.price
    }
}

export default connect(mapStateToProps, { observationChange })(OrderReview);