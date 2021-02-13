import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainAuth from '../Screens/Auth/MainAuth'
import { AppStack } from '../Navigation/MainTabNavigator'


const AuthStack = createStackNavigator({
  // Onboarding,
  MainAuth,
}, {
  defaultNavigationOptions: {
    headerBackTitle: " ",
    headerStyle: {
      backgroundColor: 'white',
      shadowColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0,
    },
    headerTintColor: '#007aff',
  },
});


export default createAppContainer(
  createSwitchNavigator({
    Auth :AuthStack,
    App : AppStack,


  },
    {
      initialRouteName: 'Auth'
    }
  )
);
