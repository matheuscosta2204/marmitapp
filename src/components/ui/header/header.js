import React from 'react';
import { Header, Left, Text, Body, Button, Icon, Right } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { goBack } from '../../../navigation/navigationService';
import styles from './header.style';
import Notes from '../../../media/images/notes.png';

const HeaderBar = ({ title, noBackButton = false }) => {
    return (
        <Header rounded style={styles.header} androidStatusBarColor="#c31212">
            {noBackButton && <Left>
                <Button transparent onPress={() => goBack()} >
                    <Icon name="arrow-back" />
                </Button>
            </Left>}
            <Body>
                <Text style={styles.title}>{title}</Text>
            </Body>
            <Right style={{ paddingHorizontal: 15 }}>
                <TouchableOpacity onPress={() => alert("go to orders")}>
                    <Icon type="FontAwesome5" name="concierge-bell" style={{ color: "white" }} />
                </TouchableOpacity>
            </Right>
        </Header>
    )
};

HeaderBar.propTypes = {
    title: PropTypes.string.isRequired
}

export default HeaderBar;