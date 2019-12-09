import React from 'react';
import { Container, Content, Text } from 'native-base';
import SearchBar from '../../components/ui/searchBar.js/searchBar';

const HomeScreen = () => {
    return (
        <Container>
            <SearchBar />
            <Content>
                <Text>Home</Text>
            </Content>
        </Container>
    )
};

export default HomeScreen;