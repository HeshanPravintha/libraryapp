import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainAuth from '../Screens/Auth/MainAuth'
import Register from '../Screens/Auth/Register'
import ForgetPassword from '../Screens/Auth/ForgetPassword'
import { AppStack } from '../Navigation/MainTabNavigator'


const AuthStack = createStackNavigator({
  // Onboarding,
  MainAuth,
  Register,
  ForgetPassword
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
