import React, { useState, useEffect } from 'react';
import { Container, Content, View, Thumbnail, Text, Fab, Icon } from 'native-base';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';

import HeaderBar from '../../components/ui/header/header';
import styles from './restaurantDetails.style';
import Menu from '../../components/menu/menuDetails';

import { checkAddressDistance } from '../../utils/helper';
import { loadRestaurantMenu } from '../../actions/restaurant';

const baseURL = 'https://marmitapp-admin.herokuapp.com';

const RestaurantDetails = ({ restaurant, navigation, loadRestaurantMenu, userAddress }) => {

    const [loading, setLoading] = useState(true);
    const [menu, setMenu] = useState({});
    const [distance, setDistance] = useState({});

    useEffect(() => {
        _getMenu();
        checkAddressDistance(`${restaurant.address}, ${restaurant.number}, ${restaurant.zipCode}`, `${userAddress.street}, ${userAddress.number}, ${userAddress.cep}`, restaurant.distanceLimit)
            .then(res => setDistance(res));
    }, [])

    const _getMenu = async () => {
        setLoading(true);
        try {
            const newMenu = await axios.get(`${baseURL}/api/menu/restaurant/${restaurant._id}`);
            if(newMenu.data.length > 0) {
                const dayMenu = newMenu.data.filter(menu => moment(menu.data).format('YYYY-mm-dd') === moment().format('YYYY-mm-dd'));
                setMenu(dayMenu[0]);
                loadRestaurantMenu(dayMenu[0]);
            } else {
                setMenu({});
            }
        } catch(err) {
            console.log(err);
        }
        setLoading(false);
    }
    
    return (
        <Container>
            <HeaderBar title="Details" backButton />
            <Content>
                <View style={styles.content}>
                    <View style={styles.infoContent}>
                        <View style={styles.titleContainer}>
                            <Thumbnail large square source={{ uri: restaurant.logo }} />
                            <Text style={styles.title}>{restaurant.name}</Text>
                            {!distance.isOut && <Text style={styles.distance}>{distance.text}</Text>}
                        </View>
                        {distance.isOut && <Text style={styles.distanceLimited}>{distance.text}</Text>}
                        <Text style={styles.data}>{restaurant.address}, {restaurant.number}</Text>
                        <Text style={styles.data}>{restaurant.phone}</Text>
                    </View>
                    <Menu loading={loading} menu={menu} />
                </View>
            </Content>
            {!distance.isOut && !!Object.keys(menu).length && restaurant.whatsapp && <Fab
                style={{ backgroundColor: "#c31212" }}
                position="bottomRight"
                onPress={() => navigation.navigate("NewOrder")}
            >
                <Icon name="ios-add" style={{ fontSize: 40 }} />
            </Fab>}
        </Container>
    )
}

function mapStateToProps({ restaurant, auth }) {
    return {
        restaurant: restaurant.current,
        userAddress: auth.user.address
    }
}

export default connect(mapStateToProps, { loadRestaurantMenu })(RestaurantDetails);