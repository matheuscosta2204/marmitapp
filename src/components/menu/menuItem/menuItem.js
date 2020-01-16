import React from 'react';
import { Image } from 'react-native';
import { View, Text, Card, CardItem, Thumbnail } from 'native-base';
import styles from './menuItem.style';

const MenuItem = ({ type, items, icon }) => {
    return (
        <Card>
            <CardItem>
                <View style={styles.itemsContainer}>
                    <Image source={icon} style={styles.icon} />
                    <View style={styles.itemsContent}>
                        <Text style={styles.type}>{type}</Text>
                        {items.map((item, key) => (
                            <Text key={key} style={styles.item}>{item}</Text>
                        ))}
                    </View>
                </View>            
            </CardItem>
        </Card>
    )
}

export default MenuItem;