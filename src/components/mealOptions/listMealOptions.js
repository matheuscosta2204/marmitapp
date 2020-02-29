import React from 'react';
import { View, Button, Icon, Text } from 'native-base';

import styles from './listMealOptions.style';
import ItemMealOption from './itemMealOption';

const ListMealOptions = ({ options }) => {
    return (
        <View>
            <View style={styles.listContainer}>
                {options.map(option => (
                    <ItemMealOption key={option._id} option={option} />
                ))}
            </View>
        </View>
    )
}

export default ListMealOptions;