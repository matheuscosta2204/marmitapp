import React, { useState, useEffect } from 'react';
import { Container, Content, View, Thumbnail, Text } from 'native-base';
import axios from 'axios';
import moment from 'moment';

import HeaderBar from '../../components/ui/header/header';
import styles from './restaurantDetails.style';
import Menu from '../../components/menu/menuDetails';

const baseURL = 'https://marmitapp-admin.herokuapp.com';

const RestaurantDetails = ({ navigation }) => {

    const [loading, setLoading] = useState(true);
    const [menu, setMenu] = useState({});
    const { restaurant } = navigation.state.params;

    useEffect(() => {
        _getMenu();
    }, [])

    _getMenu = async () => {
        setLoading(true);
        try {
            const newMenu = await axios.get(`${baseURL}/api/menu/restaurant/${restaurant._id}`); 
            const dayMenu = newMenu.data.filter(menu => moment(menu.data).format('YYYY-mm-dd') === moment().format('YYYY-mm-dd'));
            setMenu(dayMenu[0]);
        } catch(err) {
            console.log(err);
        }
        setLoading(false);
    }

    return (
        <Container>
            <HeaderBar title="Details" />
            <Content>
                <View style={styles.content}>
                    <View style={styles.infoContent}>
                        <View style={styles.titleContainer}>
                            <Thumbnail large square source={{ uri: restaurant.logo }} />
                            <Text style={styles.title}>{restaurant.name}</Text>
                        </View>
                        <Text style={styles.data}>{restaurant.address}</Text>
                        <Text style={styles.data}>{restaurant.phone}</Text>
                    </View>
                    <Menu loading={loading} menu={menu}/>
                </View>
            </Content>
        </Container>
    )
}

export default RestaurantDetails;