import React from 'react';
import { Header, Left, Text, Body, Button, Icon, Right } from 'native-base';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { navigate } from '../../../navigation/navigationService';
import { goBack } from '../../../navigation/navigationService';
import styles from './header.style';

const HeaderBar = ({ title, backButton = false, orderButton = false }) => {
    return (
        <Header rounded style={styles.header} androidStatusBarColor="#c31212">
            {backButton && <Left>
                <Button transparent onPress={() => goBack()} >
                    <Icon name="arrow-back" />
                </Button>
            </Left>}
            <Body>
                <Text style={styles.title}>{title}</Text>
            </Body>
            {orderButton && <Right style={{ paddingHorizontal: 15 }}>
                <TouchableOpacity onPress={() => navigate("Orders")}>
                    <Icon type="FontAwesome5" name="clipboard-list" style={{ color: "white" }} />
                </TouchableOpacity>
            </Right>}
        </Header>
    )
};

HeaderBar.propTypes = {
    title: PropTypes.string.isRequired
}

export default HeaderBar;