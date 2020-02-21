import React from 'react';
import { View, Text, Card, CardItem } from 'native-base';

import styles from './itemMealOption.style';

const ItemMealOption = ({ option }) => {
    return (
        <Card>
            <CardItem button onPress={() => alert("ola")}>
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>{option.title}</Text>
                    <Text style={styles.description}>{option.description}</Text>
                    <Text style={styles.price}>${option.price}</Text>
                </View>
            </CardItem>
        </Card>
    )
};

export default ItemMealOption;