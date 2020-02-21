import React from 'react';
import { View } from 'native-base';

import ItemMealOption from './itemMealOption';

const ListMealOptions = ({ options }) => {
    return (
        <View>
            {options.map(option => (
                <ItemMealOption key={option._id} option={option} />
            ))}
        </View>
    )
}

export default ListMealOptions;