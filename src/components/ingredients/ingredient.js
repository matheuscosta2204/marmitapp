import React from 'react';
import { Image } from 'react-native';
import { View, Text, Card, CardItem } from 'native-base';
import styles from './ingredient.style';

const Ingredient = ({ type, items, icon }) => {
    return (
        <Card>
            <CardItem>
                <View style={styles.itemsContainer}>
                    <View style={styles.headerContainer}>
                        <Image source={icon} style={styles.icon} />
                        <Text style={styles.type}>{type}</Text>
                    </View>
                    <View style={styles.itemsContent}>
                        {items.map((item, key) => {
                            const price = item.price ? item.price : 0.00;
                            return (
                                <View style={styles.itemContainer} key={key}>
                                    <Text style={styles.item}>{item.description}</Text>
                                    <Text>{price}</Text>
                                    
                                </View>
                            )
                        })}
                    </View>
                </View>            
            </CardItem>
        </Card>
    )
}

export default Ingredient;