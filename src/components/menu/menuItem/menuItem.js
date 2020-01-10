import React from 'react';
import { View, Text } from 'native-base';
import styles from './menuItem.style';

const MenuItem = ({ type, items }) => {
    return (
        <View style={styles.itemsContainer}>
            <Text style={styles.type}>{type}</Text>
            <View style={{ borderLeftColor: "black", borderLeftWidth: 1, margin: 10, paddingLeft: 10 }}>
                {items.map(item => (
                    <Text style={styles.item}>{item}</Text>
                ))}
            </View>
        </View>
    )
}

export default MenuItem;