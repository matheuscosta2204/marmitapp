import React, { useState, useEffect } from 'react';
import { Modal, TouchableOpacity, Alert } from 'react-native';
import { View, Text, Form, Item, Label, Input, Icon } from 'native-base';
import { connect } from 'react-redux';
import styles from './newAddressModal.style';
import { setModalVisible } from '../../actions/address';
import { saveAddress } from '../../actions/authedUser';
import { checkAddressDistance } from '../../utils/helper';
import { setAlert } from '../../actions/alert';

const NewAddressModal = ({ restaurant, modalVisible, setModalVisible, userAddress, saveAddress, isNew }) => {
    const [cep, setCep] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [neighborhood, setNeighborhood] = useState("");

    useEffect(() => {
        if(modalVisible){
            if(isNew === false) {
                setCep(userAddress.cep);
                setStreet(userAddress.street);
                setNumber(userAddress.number);
                setNeighborhood(userAddress.neighborhood);
            } else {
                setCep("");
                setStreet("");
                setNumber("");
                setNeighborhood("");
            }
        }
    }, [modalVisible]);

    const closeWithConfirm = () => {
        Alert.alert(
            'Warning',
            'By leaving, you will lose changes.',
            [
                {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
                },
                {text: 'Confirm', onPress: () => setModalVisible(false)},
            ],
            {cancelable: false},
        );
    }

    const _saveAddress = ({ cep, street, number, neighborhood }) => {
        checkAddressDistance(`${restaurant.address}, ${restaurant.number}, ${restaurant.zipCode}`, `${userAddress.street}, ${userAddress.number}, ${userAddress.cep}`, restaurant.distanceLimit)
        .then(res => {
            if(!res.isOut) {
                saveAddress({ cep, street, number, neighborhood });
                setModalVisible(false); 
            } else {
                setAlert('Address out of limit distance', 'danger');
            }
        });
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <TouchableOpacity style={styles.backgroundModal} onPress={closeWithConfirm} />
                <View style={styles.modalView}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>New Address</Text>
                        <Icon ios='ios-close' android="md-close" style={{fontSize: 30, color: '#fff'}} onPress={closeWithConfirm} />
                    </View>
                    <Form style={styles.formContainer}>
                        <Item stackedLabel>
                            <Label>CEP</Label>
                            <Input 
                                value={cep} 
                                onChangeText={setCep} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Street Name</Label>
                            <Input 
                                value={street} 
                                onChangeText={setStreet} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Number</Label>
                            <Input 
                                value={number} 
                                onChangeText={setNumber} />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Neighborhood</Label>
                            <Input 
                                value={neighborhood} 
                                onChangeText={setNeighborhood} />
                        </Item>
                        <TouchableOpacity 
                            style={styles.loginButton}
                            onPress={() => _saveAddress({ cep, street, number, neighborhood })}>
                            <Text style={styles.buttonText}>SAVE</Text>
                        </TouchableOpacity>
                    </Form>
                </View>
            </View>
        </Modal>
    )
};

function mapStateToProps ({ restaurant, address, auth }) {
    return {
        restaurant: restaurant.current,
        modalVisible: address.modalVisible,
        isNew: address.isNew,
        userAddress: auth.user.address
    }
}

export default connect(mapStateToProps, { saveAddress, setModalVisible })(NewAddressModal);