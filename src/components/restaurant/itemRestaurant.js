import React from 'react';
import { ListItem, View, Text, Thumbnail } from 'native-base';

import styles from './itemRestaurant.style';

const ItemRestaurant = ({ restaurant }) => {
    return (
        <ListItem style={styles.itemContainer}>
            <View style={styles.itemContent}>
                <Thumbnail square source={{ uri: restaurant.logo }} />
                <View style={styles.itemRightView}>
                    <Text style={styles.itemTitle}>{restaurant.name}</Text>
                    <Text style={styles.itemSubtitle}>{restaurant.address}</Text>
                </View>
            </View>
        </ListItem>
    )
};

export default ItemRestaurant;