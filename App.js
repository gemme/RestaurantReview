/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator } from 'react-navigation';
import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo';
import AddReview from 'components/AddReview';
import About from 'components/About';

const ListNavigator = createStackNavigator({
  Home: {screen: RestaurantList},
  Info: {screen: RestaurantInfo}
}, {
  defaultNavigationOptions: {
   headerStyle: {
      backgroundColor: '#0066CC',
      color: '#FFF'
   },
   headerTintColor: '#FFF',
   headerTitleStyle: {
     color: '#FFF'
   }
 }
})

const TabNavigator = createBottomTabNavigator({
  List: {screen: ListNavigator},
  About: {screen: About}
}, {
  defaultNavigationOptions:({navigation}) => {
    return {
      tabBarIcon: ({tintColor}) => {
        const route = navigation.state.routeName;
        const name = {
          'List': 'list',
          'About': 'info-circle'
        }[route];
        return <Icon name={name} color={tintColor} size={23} />
      }
    }
  }, tabBarOptions: {
      activeBackgroundColor: '#E6F0FA'
  }
})

const MainNavigator = createStackNavigator({
  Tabs: { screen: TabNavigator },
  AddReview: { screen: AddReview }
}, {
  mode: 'modal',
  headerMode: 'none',
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
})

export default createAppContainer(MainNavigator);