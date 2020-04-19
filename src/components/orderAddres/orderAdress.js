import React, { useState } from 'react';
import { View, Text, Card, CardItem, Radio } from 'native-base';
import { connect } from 'react-redux';
import styles from './orderAddress.style';
import { setModalVisible } from '../../actions/address';

const OrderAddress = ({ setModalVisible }) => {
    return (
        <Card style={styles.container}>
            <CardItem style={styles.content}>
                <View style={styles.item}>
                    <Radio
                        onPress={() => alert("teste")}
                        style={styles.radioButton}
                        color={"#c31212"}
                        selectedColor={"#c31212"}
                        selected={true}
                    />
                    <Text style={{ }}>Current Address</Text>
                </View>
                <View style={styles.item}>
                    <Radio
                        onPress={() => setModalVisible(true)}
                        style={styles.radioButton}
                        color={"#c31212"}
                        selectedColor={"#c31212"}
                        selected={false}
                    />
                    <Text style={{ }}>New Address</Text>
                </View>
            </CardItem>
        </Card>
    )
};

export default connect(null, { setModalVisible })(OrderAddress);