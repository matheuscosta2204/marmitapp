import React, { useEffect } from 'react';
import { View, Text, Container, Content, Thumbnail } from 'native-base';
import { connect } from 'react-redux';

import styles from './newOrder.style';
import HeaderBar from '../../../components/ui/header/header';
import ListMealOptions from '../../../components/mealOptions/listMealOptions';
import Ingredients from '../../../components/ingredients/ingredients';

import { loadMealOptions } from '../../../actions/restaurant';

const NewOrder = ({ restaurant, loadMealOptions, options, step }) => {

    useEffect(() => {
        loadMealOptions(restaurant._id);
    }, []);

    const renderStep = () => {
        if (step === 'mealOptions') {
            return <ListMealOptions options={options} />;
        } else if (step === 'ingredients') {
            return <Ingredients />;
        } else if (step === 'review') {
            return <View><Text>Review</Text></View>;
        } else {
            return <View><Text>Error</Text></View>;
        }
    }

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
                    {renderStep()}
                </View>
            </Content>
        </Container>
    )
};

function mapStateToProps({ restaurant, order }) {
    return {
        restaurant: restaurant.current,
        options: restaurant.mealOptions,
        step: order.step
    }
}

export default connect(mapStateToProps, { loadMealOptions })(NewOrder);