import React from 'react';
import { ImageBackground } from 'react-native';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';

import styles from './searchBar.style.js';

const SearchBar = () => {
    return (
        <Header searchBar rounded style={styles.header}>
            <Item>
                <Icon name="ios-search" />
                <Input placeholder="Type Restaurant's name" />
            </Item>
            <Button>
                <Text>Search</Text>
            </Button>
        </Header>
    )
}

export default SearchBar;