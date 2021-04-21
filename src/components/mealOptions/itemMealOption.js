import React from 'react';
import { View, Text, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';
import styles from './itemMealOption.style';

import { setOrderStep, setMealOption } from '../../actions/order';

const ItemMealOption = ({ option, setMealOption, setOrderStep }) => {

    const _setMealOption = () => {
        setMealOption(option.title, option.price, option.main.quantity, option.side.quantity, option.salads.quantity, option.deserts.quantity);
        setOrderStep('ingredients');
    }

    return (
        <Card>
            <CardItem button onPress={_setMealOption}>
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>{option.title}</Text>
                    <Text style={styles.description}>{option.main.quantity} Main Dishes</Text>
                    <Text style={styles.description}>{option.side.quantity} Salads Dishes</Text>
                    <Text style={styles.description}>{option.salads.quantity} Salads</Text>
                    <Text style={styles.description}>{option.deserts.quantity} Deserts</Text>
                    <Text style={styles.price}>${option.price}</Text>
                </View>
            </CardItem>
        </Card>
    )
};

export default connect(null, { setMealOption, setOrderStep })(ItemMealOption);