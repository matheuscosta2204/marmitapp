import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Icon } from 'native-base';
import styles from './addOrRemove.style';

const AddOrRemove = ({ value, add, remove }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.itemContainer} onPress={remove}>
                <Icon type="Ionicons" android="md-remove" ios="ios-remove" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.text}>{value}</Text>
            <TouchableOpacity style={styles.itemContainer} onPress={add}>
                <Icon type="Ionicons" android="md-add" ios="ios-add" style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default AddOrRemove;