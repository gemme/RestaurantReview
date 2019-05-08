import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import Header from 'components/Header';
import RestaurantRow from 'components/restaurant/RestaurantRow';
import axios from 'axios';
import PizzaImage from 'images/pizza.png';

import { connect } from 'react-redux';

import * as restaurantActions from 'redux-store/actions/restaurant';

type Props = {};
const RestaurantList = ({
  navigation,
  places,
  loadRestaurants
 }: Props) => {
    const [search, setSearch] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        loadRestaurants();
    }, []);

    return (
      <View style={{flex: 1}}>
      <View
        style={
          {marginTop: 30,
          alignItems: 'center'}
        }
      >
        <Image source={PizzaImage} />
      </View>
        <Header />
        <TextInput
          style={styles.input}
          placeholder='Live Search'
          onChangeText={
            text => {
              setSearch(text);
          }}
          value={search}
        />
        <FlatList
          data={
            places
              .filter(place => {
                return !search ||
                  place.name.toLowerCase().indexOf(search.toLowerCase()) > -1
              })
          }
          renderItem={({item, index}) =>
            <RestaurantRow
                place={item}
                index={index}
                navigation={navigation}
                />
          }
          keyExtractor={item => item.name}
          initialNumToRender={14}
        />
    </View>
    );
};

RestaurantList.navigationOptions = {
    header: null
}

const mapStateToProps = (state) => {
  const { restaurant } = state;
  return {
      places: restaurant.places
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRestaurants: () => dispatch(restaurantActions.loadRestaurants())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);

const styles = StyleSheet.create({
  input:{
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
})
