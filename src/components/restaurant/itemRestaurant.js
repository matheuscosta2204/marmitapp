import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem, View, Text, Thumbnail } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { navigate } from '../../navigation/navigationService';
import styles from './itemRestaurant.style';

const ItemRestaurant = ({ restaurant }) => {

    const [favorite, setFavorite] = useState(false);

    const iconName = `ios-star${favorite ? '' : '-outline'}`;

    const starClicked = () => {
        // Call endpoint to save favorite changes
        setFavorite(!favorite);
    }
    
    return (
        <ListItem style={styles.itemContainer}>
            <TouchableOpacity style={styles.itemContent} onPress={() => navigate("RestaurantDetails", { restaurant })}>
                <Thumbnail square source={{ uri: restaurant.logo }} />
                <View style={styles.itemCenterView}>
                    <Text numberOfLines={1} style={styles.itemTitle}>{restaurant.name}</Text>
                    <Text numberOfLines={2} style={styles.itemSubtitle}>{restaurant.address}</Text>
                </View>
                <TouchableOpacity onPress={starClicked}>
                    <Ionicons style={styles.starIcon} name={iconName} size={35} color="#ffc61a" />
                </TouchableOpacity>
            </TouchableOpacity>
        </ListItem>
    )
};

export default ItemRestaurant;