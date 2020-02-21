import React, { useEffect } from 'react';
import { View, Text, Container, Content, Thumbnail } from 'native-base';
import { connect } from 'react-redux';

import styles from './newOrder.style';
import HeaderBar from '../../../components/ui/header/header';
import ListMealOptions from '../../../components/mealOptions/listMealOptions';

import { loadMealOptions } from '../../../actions/restaurant';

const NewOrder = ({ restaurant, loadMealOptions, options }) => {

    useEffect(() => {
        loadMealOptions(restaurant._id);
    }, []);    

    return (
        <Container>
            <HeaderBar title="New Order" backButton />
            <Content>
                <View style={styles.content}>
                    <View style={styles.infoContent}>
                        <View style={styles.titleContainer}>
                            <Thumbnail large square source={{ uri: restaurant.logo }} />
                            <Text style={styles.title}>{restaurant.name}</Text>
                        </View>
                    </View>
                    <ListMealOptions options={options} />
                </View>
            </Content>
        </Container>
    )
};

function mapStateToProps({ restaurant }) {
    return {
        restaurant: restaurant.current,
        options: restaurant.mealOptions
    }
}

export default connect(mapStateToProps, { loadMealOptions })(NewOrder);