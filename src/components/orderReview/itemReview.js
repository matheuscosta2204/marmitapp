import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, View, Text } from 'native-base';

import styles from './itemReview.style';

const ItemReview = ({ items, icon }) => {

    const itemsPrepared = items.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});

    if(items.length <= 0) {
        return null;
    }

    return (
        <Card>
            <CardItem>
                <View style={styles.itemsContainer}>
                    <Image source={icon} style={styles.icon} />
                    <View style={styles.itemsContent}>
                        {Object.keys(itemsPrepared).map((item, key) => {
                            return (
                                <View style={styles.itemContainer} key={key}>
                                    <View style={styles.descriptionContainer}>
                                        <Text>{itemsPrepared[item]}</Text>
                                        <Text style={styles.item}>{item}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>            
            </CardItem>
        </Card>
    )
}

export default ItemReview;