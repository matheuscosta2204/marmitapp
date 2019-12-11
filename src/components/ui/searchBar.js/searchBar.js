import React from 'react';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import styles from './searchBar.style.js';

const SearchBar = ({ onChange, placeholder }) => {
    return (
        <Header searchBar rounded style={styles.header} androidStatusBarColor="#c31212">
            <Item>
                <Icon name="ios-search" />
                <Input placeholder={placeholder} onChangeText={value => onChange(value)} />
            </Item>
            <Button>
                <Text>Search</Text>
            </Button>
        </Header>
    )
}

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default SearchBar;