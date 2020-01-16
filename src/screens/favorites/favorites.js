import React, { useState, useEffect } from 'react';
import { Container, Content } from 'native-base';
import axios from 'axios';
import { connect } from 'react-redux';

import Loader from '../../components/ui/loader/loader';
import HeaderBar from '../../components/ui/header/header';
import ListRestaurants from '../../components/restaurant/listRestaurants';

import { loadFavorites } from '../../actions/favorites';

const baseURL = 'https://marmitapp-admin.herokuapp.com';

const Favorites = ({ favorites, loadFavorites }) => {

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        _getRestaurants();
    }, []);

    _getRestaurants = async () => {
        try {
            const newRestaurants = await axios.get(`${baseURL}/api/restaurant/favorites`);
            if(newRestaurants.data.length > 0) {
                loadFavorites(newRestaurants.data);
            }
        } catch(err) {
            console.log(err);
        }
        setLoading(false);
    }

    return (
        <Container>
            <Loader loading={loading} />
            <HeaderBar title="Favorites" />
            <ListRestaurants restaurants={favorites} getRestaurants={() => _getRestaurants()} loading={loading} />
        </Container>
    )
};

function mapStateToProps({ favorites }) {
    return { favorites }
}

export default connect(mapStateToProps, { loadFavorites })(Favorites);