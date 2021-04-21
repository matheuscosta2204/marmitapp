import React from 'react';
import { TouchableOpacity, TouchableHighlight } from 'react-native';
import { View, Text, Icon } from 'native-base';
import styles from './addOrRemove.style';

const AddOrRemove = ({ value, add, remove, limited }) => {

    const renderAdd = () => {
        if(limited) {
            return <TouchableOpacity style={styles.itemContainer} onPress={add}>
                        <Icon type="Ionicons" android="md-add" ios="ios-add" style={styles.icon} />
                    </TouchableOpacity>
        } else {
            return <TouchableHighlight style={styles.itemContainerDisabled}>
                        <Icon type="Ionicons" android="md-add" ios="ios-add" style={styles.icon} />
                    </TouchableHighlight>
        }
    }

    const renderRemove = () => {
        if(value === 0) {
            return <TouchableHighlight style={styles.itemContainerDisabled}>
                        <Icon type="Ionicons" android="md-remove" ios="ios-remove" style={styles.icon} />
                    </TouchableHighlight>
        } else {
            return <TouchableOpacity style={styles.itemContainer} onPress={remove}>
                        <Icon type="Ionicons" android="md-remove" ios="ios-remove" style={styles.icon} />
                    </TouchableOpacity>
        }
    }

    return (
        <View style={styles.container}>
            {renderRemove()}
            <Text style={styles.text}>{value}</Text>
            {renderAdd()}
        </View>
    )
}

export default AddOrRemove;