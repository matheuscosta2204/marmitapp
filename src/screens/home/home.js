import React, { useState, useEffect } from 'react';
import { Container } from 'native-base';
import axios from 'axios';

import Loader from '../../components/ui/loader/loader';
import SearchBar from '../../components/ui/searchBar/searchBar';
import ListRestaurants from '../../components/restaurant/listRestaurants';

const baseURL = 'https://marmitapp-admin.herokuapp.com';

const HomeScreen = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    
    useEffect(() => {
        _getRestaurants(1, [], true);
    }, [searchQuery]);

    _getRestaurants = async (page, restaurants, showLoading = false) => {
        if(loading) return;

        setShowLoading(showLoading);
        setLoading(true);
        try {
            const newRestaurants = await axios.get(`${baseURL}/api/restaurant/filter/${searchQuery !== '' ? searchQuery+'/' : ''}${page}/5`);
            if(newRestaurants.data.length > 0) {
                setRestaurants([...restaurants, ...newRestaurants.data ]);
                setPage(page + 1);
            }
        } catch(err) {
            console.log(err);
        }
        setShowLoading(false);
        setLoading(false);
    }

    return (
        <Container>
            <Loader loading={showLoading} />
            <SearchBar onChange={setSearchQuery} placeholder="Dish or Restaurant" />
            <ListRestaurants restaurants={restaurants} getRestaurants={() => _getRestaurants(page, restaurants)} loading={loading} />
        </Container>
    )
};

export default HomeScreen;