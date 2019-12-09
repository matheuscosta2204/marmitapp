import React, { useEffect } from 'react';
import { View, Image } from 'react-native'
import { connect } from 'react-redux';

import logo from '../../media/images/FullLogoVertical.png';

const Auth = ({ loading, isAuthenticated, navigation }) => {
    _authenticate = async () => { 
        if(!loading) {
            if(isAuthenticated) {
                navigation.navigate('Home');
            } else {
                navigation.navigate('Login');
            }
        }
    }

    useEffect(() => {
        _authenticate();
    }, [loading]);

    return (
        <View style={styles.container}>
            <Image source={logo} />
        </View>
    );
}

function mapStateToProps({ auth }) {
    return { 
        isAuthenticated: auth.isAuthenticated,
        loading: auth.loading
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
}

export default connect(mapStateToProps)(Auth);