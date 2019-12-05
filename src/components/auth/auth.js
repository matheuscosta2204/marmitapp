import React, { useEffect } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

const Auth = ({ navigation }) => {
    _authenticate = async () => {
        let isAuthenticated = false;
        try {
            isAuthenticated = await AsyncStorage.getItem('isAuthenticated');
        } catch(err) {
            console.log(err);
        }

        if(isAuthenticated) {
            navigation.navigate('Home');
        } else {
            navigation.navigate('Login');
        }
    }

    useEffect(() => {
        _authenticate();
    }, []);
    
    return (<></>);
}

export default Auth;