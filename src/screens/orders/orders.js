import React from 'react';
import { View, Text, Container, Content } from 'native-base';

import HeaderBar from '../../components/ui/header/header';

const Orders = () => {
    return (
        <Container>
            <HeaderBar title="Orders" />
            <Content>
                <View>
                    <Text>Orders</Text>
                </View>
            </Content>
        </Container>
    )
};

export default Orders;