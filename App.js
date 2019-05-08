/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator } from 'react-navigation';
import RestaurantList from 'components/restaurant/RestaurantList';
import RestaurantInfo from 'components/restaurant/RestaurantInfo';
import AddReview from 'components/review/AddReview';
import About from 'components/About';
import SplashScreen from 'react-native-splash-screen';

import { Provider } from 'react-redux';
import configureStore from 'redux-store/configureStore';

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
});
const AppContainer = createAppContainer(MainNavigator);
const store = configureStore();

export default () => {
  useEffect(() => {
    SplashScreen.hide();
  },[]);
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};