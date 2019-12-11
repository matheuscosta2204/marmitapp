import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View, List } from 'native-base';
import ItemRestaurant from './itemRestaurant';

const ListRestaurants = ({ restaurants, getRestaurants, loading }) => {
    
    _renderItem = (item) => (
        <ItemRestaurant restaurant={item} />
    );
    
    _renderFooter = () => {
        if (!loading) return null;
        return (
            <View style={{ marginVertical: 30 }}>
                <ActivityIndicator />
            </View>
        ) 
    }

    return (
        <List 
            dataArray={restaurants}
            renderRow={_renderItem}
            onEndReached={getRestaurants}
            onEndReachedThreshold={0.1}
            ListFooterComponent={_renderFooter}
        />
    )
};

export default ListRestaurants;