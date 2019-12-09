import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../stacks/home';
import Favorites from '../stacks/favorites';
import User from '../stacks/user';

export default createBottomTabNavigator({
    Home,
    Favorites,
    User
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-list${focused ? '-box' : ''}`;
          } else if (routeName === 'Favorites') {
            iconName = `ios-star${focused ? '' : '-outline'}`;
          } else if (routeName === 'User') {
            iconName = `md-person`;
          }
  
          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#c31212',
        inactiveTintColor: 'gray',
      },
})