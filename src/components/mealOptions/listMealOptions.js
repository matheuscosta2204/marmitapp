import React from 'react';
import { View, Button, Icon, Text } from 'native-base';
import { connect } from 'react-redux';

import styles from './listMealOptions.style';
import ItemMealOption from './itemMealOption';

import { setOrderStep } from '../../actions/order';

const ListMealOptions = ({ options, setOrderStep }) => {
    return (
        <View>
            <View style={styles.listContainer}>
                {options.map(option => (
                    <ItemMealOption key={option._id} option={option} />
                ))}
            </View>
            <View>
                <Button iconRight full onPress={() => setOrderStep('ingredients')}>
                    <Text>Next Step</Text>
                    <Icon name='arrow-forward' />
                </Button>
            </View>
        </View>
    )
}

export default connect(null, { setOrderStep })(ListMealOptions);