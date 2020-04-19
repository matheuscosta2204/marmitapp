import React from 'react';
import { Modal, TouchableOpacity, Alert } from 'react-native';
import { View, Text, Form, Item, Label, Input, Icon } from 'native-base';
import { connect } from 'react-redux';
import styles from './newAddressModal.style';
import { setModalVisible } from '../../actions/address';

const NewAddressModal = ({ modalVisible, setModalVisible }) => {

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
                        <Item floatingLabel>
                            <Label>Address</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Number</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Neighborhood</Label>
                            <Input />
                        </Item>
                        <TouchableOpacity 
                            style={styles.loginButton}
                            onPress={() => alert("Finishing Order")}>
                            <Text style={styles.buttonText}>SAVE</Text>
                        </TouchableOpacity>
                    </Form>
                </View>
            </View>
        </Modal>
    )
};

function mapStateToProps ({ address }) {
    return {
        modalVisible: address.modalVisible
    }
}

export default connect(mapStateToProps, { setModalVisible })(NewAddressModal);