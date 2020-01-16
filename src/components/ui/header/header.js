import React from 'react';
import { Header, Left, Text, Body, Button, Icon } from 'native-base';
import PropTypes from 'prop-types';

import { goBack } from '../../../navigation/navigationService';
import styles from './header.style';

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
        </Header>
    )
};

HeaderBar.propTypes = {
    title: PropTypes.string.isRequired
}

export default HeaderBar;