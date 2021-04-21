import React from 'react';
import { View, Text, Card, CardItem, Radio } from 'native-base';
import { connect } from 'react-redux';
import styles from './orderAddress.style';
import { setModalVisible } from '../../actions/address';

const OrderAddress = ({ setModalVisible, address }) => {
    return (
        <Card style={styles.container}>
            <CardItem style={styles.content}>
                <Text style={styles.contentTitle}>Address</Text>
                <View style={styles.item}>
                    <Radio
                        onPress={() => alert("teste")} 
                        style={styles.radioButton} 
                        color={"#c31212"} 
                        selectedColor={"#c31212"} 
                        selected={true} 
                    />
                    <View>
                        <Text>{address.cep}, {address.street}, {address.number}</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Radio
                        onPress={() => setModalVisible(true, true)}
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

function mapStateToProps({ auth }) {
    return {
        address: auth.user.address
    }
}

export default connect(mapStateToProps, { setModalVisible })(OrderAddress);