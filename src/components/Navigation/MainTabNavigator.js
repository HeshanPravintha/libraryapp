import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import IconComponent from './IconComponent'


import Home from '../Screens/Home'



const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const HomeStack = createStackNavigator(
  {
   Home : Home,
   //BookingDetail : BookingDetail,
  },
  config
);

const HistoryStack = createStackNavigator(
  {
    BookingHistory : Home,
    //BookingHistoryDetail : BookingDetail,
  },
  config
);


const ProfileStack = createStackNavigator(
  {
    Profile : Home,
  },
  config
);

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

export const AppStack = createBottomTabNavigator(
  {
    Home : { screen: HomeStack },
    History : { screen: HistoryStack },
    Profile : { screen: ProfileStack },

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //     const { routeName } = navigation.state;

    //     // You can return any component that you like here!
    //     return <IconComponent name={routeName} focused={focused} />;
    //   },
    }),
    tabBarOptions: {
      activeTintColor: '#704C9C',
      inactiveTintColor: 'gray',
      style: {
        shadowColor: 'gray',
        shadowOpacity: 0.2,
        borderTopColor:'white',
        elevation: Platform.OS === 'ios' ? 0 : 5,
      },
      showLabel:false
    },
  }
);





