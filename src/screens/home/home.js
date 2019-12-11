import React, { useState, useEffect } from 'react';
import { Container, Content, Text } from 'native-base';
import SearchBar from '../../components/ui/searchBar.js/searchBar';
import axios from 'axios';
import ListRestaurants from '../../components/restaurant/listRestaurants';

const baseURL = 'https://marmitapp-admin.herokuapp.com';

const HomeScreen = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    
    useEffect(() => {
        _getRestaurants(1, []);
    }, [searchQuery]);

    _getRestaurants = async (page, restaurants) => {
        if(loading) return;

        setLoading(true);
        if(searchQuery !== '') {
            try {
                const newRestaurants = await axios.get(`${baseURL}/api/restaurant/filter/${searchQuery}/${page}/5`); 
                if(newRestaurants.data.length > 0) {
                    setRestaurants([...restaurants, ...newRestaurants.data ]);
                    setPage(page + 1);
                }
            } catch(err) {
                console.log(err);
            }
        } else {
            setRestaurants([]);
        }
        setLoading(false);
    }

    return (
        <Container>
            <SearchBar onChange={setSearchQuery} placeholder="Dish or Restaurant" />
            <ListRestaurants restaurants={restaurants} getRestaurants={() => _getRestaurants(page, restaurants)} loading={loading} />
        </Container>
    )
};

export default HomeScreen;