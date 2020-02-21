import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem, View, Text, Thumbnail } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { navigate } from '../../navigation/navigationService';
import styles from './itemRestaurant.style';

import { favoriteChanges } from '../../actions/authedUser';
import { addFavorite, removeFavorite } from '../../actions/favorites';
import { setCurrentRestaurant } from '../../actions/restaurant';

const ItemRestaurant = ({ restaurant, favoriteChanges, favorites, addFavorite, removeFavorite, setCurrentRestaurant }) => {

    const [favorite, setFavorite] = useState(false);

    const iconName = `ios-star${favorite ? '' : '-outline'}`;

    const goTo = to => {
        setCurrentRestaurant(restaurant);
        navigate(to);
    }

    useEffect(() => {
        if(favorites.includes(restaurant._id)) {
            setFavorite(true);
        } else {
            setFavorite(false);
        }
    }, [favorites]);

    const starClicked = () => {
        // Call endpoint to save favorite changes
        if(favorite) {
            removeFavorite(restaurant._id);
            favoriteChanges(restaurant._id, "remove");
        } else {
            addFavorite(restaurant);
            favoriteChanges(restaurant._id, "add");
        }
        setFavorite(!favorite);
    }
    
    return (
        <ListItem style={styles.itemContainer}>
            <TouchableOpacity style={styles.itemContent} onPress={() => goTo("RestaurantDetails")}>
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

function mapStateToProps({ auth }) {
    return {
        favorites: auth.user.favorites
    }
}

export default connect(mapStateToProps, { favoriteChanges, addFavorite, removeFavorite, setCurrentRestaurant })(ItemRestaurant);