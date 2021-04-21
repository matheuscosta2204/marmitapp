import React, { useState } from 'react';
import { View, Text, Card, CardItem, Picker } from 'native-base';
import { connect } from 'react-redux';
import styles from './orderPaymentWays.style';
import { setModalVisible } from '../../actions/address';
import { paymentWayChange } from '../../actions/order';

const OrderPaymentWays = ({ paymentWays, paymentWayChange }) => {
    const [paymentWay, setPaymentWay] = useState("");

    const _paymentWayChange = (value) => {
        setPaymentWay(value);
        paymentWayChange(value);
    }

    return (
        <Card style={styles.container}>
            <CardItem style={styles.content}>
                <Text style={styles.contentTitle}>Payment Way</Text>
                <Picker
                    note
                    mode="dropdown"
                    style={{ width: 250 }}
                    selectedValue={paymentWay}
                    onValueChange={value => _paymentWayChange(value)}
                >
                    <Picker.Item label="Select a payment way" value="" />
                    {paymentWays.map(paymentWay => 
                        <Picker.Item label={paymentWay} value={paymentWay} />
                    )}
                </Picker>
            </CardItem>
        </Card>
    )
};

function mapStateToProps({ restaurant }) {
    const restaurantArray = Object.keys(restaurant.current.paymentWay);
    return {
        paymentWays: restaurantArray.filter(key => restaurant.current.paymentWay[key] === true)
    }
}

export default connect(mapStateToProps, { setModalVisible, paymentWayChange })(OrderPaymentWays);