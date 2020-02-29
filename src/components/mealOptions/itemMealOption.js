import React from 'react';
import { View, Text, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';
import styles from './itemMealOption.style';

import { setOrderStep, setMealOption } from '../../actions/order';

const ItemMealOption = ({ option, setMealOption, setOrderStep }) => {

    const _setMealOption = () => {
        setMealOption(option.title);
        setOrderStep('ingredients');
    }

    return (
        <Card>
            <CardItem button onPress={_setMealOption}>
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>{option.title}</Text>
                    <Text style={styles.description}>{option.description}</Text>
                    <Text style={styles.price}>${option.price}</Text>
                </View>
            </CardItem>
        </Card>
    )
};

export default connect(null, { setMealOption, setOrderStep })(ItemMealOption);