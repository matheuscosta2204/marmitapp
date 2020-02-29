import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { View, Thumbnail, Icon } from 'native-base';
import { connect } from 'react-redux';

import styles from './orderIndicator.style';
import { setOrderStep } from '../../actions/order';
import mealOptionIcon from '../../media/images/tupperware.png';
import ingredientsIcon from '../../media/images/lunch.png';
import reviewIcon from '../../media/images/food-serving.png';

const OrderIndicator = ({ step, setOrderStep }) => {

    const mealOptionsStyle = {
        borderWidth: step === "mealOptions" ? 3 : 0, 
        borderColor: "#c31212",
        marginHorizontal: step === "mealOptions" ? 3 : 0
    }

    const lunchStyle = {
        borderWidth: step === "ingredients" ? 3 : 0, 
        borderColor: "#c31212",
        marginHorizontal: step === "ingredients" ? 3 : 0
    }

    const reviewStyle = {
        borderWidth: step === "review" ? 3 : 0, 
        borderColor: "#c31212",
        marginHorizontal: step === "review" ? 3 : 0,
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setOrderStep("mealOptions")} style={{ ...styles.imageContainer, ...mealOptionsStyle }}>
                <Image source={mealOptionIcon} style={{ width: 60, height: 60 }} />
            </TouchableOpacity>
            <Icon type="Ionicons" android="md-arrow-forward" ios="ios-arrow-forward" style={styles.icon} />
            <TouchableOpacity onPress={() => setOrderStep("ingredients")} style={{ ...styles.imageContainer, ...lunchStyle }}>
                <Image source={ingredientsIcon} style={{ width: 48, height: 48 }} />
            </TouchableOpacity>
            <Icon type="Ionicons" android="md-arrow-forward" ios="ios-arrow-forward" style={styles.icon} />
            <TouchableOpacity onPress={() => setOrderStep("review")} style={{ ...styles.imageContainer, ...reviewStyle }}>
                <Image source={reviewIcon} style={{ width: 60, height: 60 }} />
            </TouchableOpacity>
        </View>
    )
}

function mapStateToProps ({ order }) {
    return {
        step: order.step
    }
}

export default connect(mapStateToProps, { setOrderStep })(OrderIndicator);