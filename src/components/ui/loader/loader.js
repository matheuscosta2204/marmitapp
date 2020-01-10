import React from 'react';
import { StyleSheet } from 'react-native';
import { View, ActivityIndicator } from 'react-native';

const Loader = ({ loading }) => {
    if(!loading) return null; 
    return (
       <View style={styles.loader}>
           <ActivityIndicator />
       </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    loader: {
        zIndex: 100,
        width: '100%',
        height: '100%',
    }
})