/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo';

const AppNavigator = createStackNavigator({
  Home: {screen: RestaurantList},
  Info: {screen: RestaurantInfo}
})
export default createAppContainer(AppNavigator);