/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';
import Header from 'components/Header';
import RestaurantRow from 'components/RestaurantRow';
import axios from 'axios';

type Props = {};
const App = (props: Props) => {
    const [search, setSearch] = useState('');
    const [restaurants, setRestaurants] = useState([]);

    // componentDidMount / empty bracket sould do the same job
    /* useEffect(() => {
      fetch('http://localhost:3000/api/Restaurants/places')
        .then(response => {
          return response.json()
        })
        .then(result => {
          setRestaurants(result)
        })
    }, []) */
    useEffect(() => {
      axios.get('http://localhost:3000/api/Restaurants/places')
        .then(result => {
          console.log('axios::get');
          const { data } = result;
          setRestaurants(data)
        })
    }, []);

    return (
      <View style={{flex: 1}}>
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
            restaurants
              .filter(place => {
                return !search ||
                  place.name.toLowerCase().indexOf(search.toLowerCase()) > -1
              })
          }
          renderItem={({item, index}) =>
            <RestaurantRow place={item} index={index}/>
          }
          keyExtractor={item => item.name}
          initialNumToRender={14}
        />
    </View>
    );
};

export default App;

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


/* const restaurants = [
  {name: 'React Cafe', address: '123 Anywhere St'},
  {name: 'Fancy Restaurant', address: '799 Main St'},
  {name: 'Taco Place', address: '550 Maple Rd'},
  {name: "Tony's Diner", address: '4101 College St'},
  {name: 'Pasta Central', address: '706 Harper St'},
  {name: 'Burger Builder', address: '4869 Hamilton Dr'},
  {name: 'Pizza Express', address: '1049 Bird St'},
  {name: 'Teriyaki To Go', address: '1885 Tea Berry Lane'},
  {name: 'Maroon Deli', address: '1082 Stuart St'},
  {name: 'Prime Bar and Grill', address: '1848 Fairfax Dr'},
  {name: 'Dumpling House', address: '747 Kelly Dr'},
  {name: 'Hot Chicken', address: '1816 Olive St'},
  {name: "Luna's Tap Room", address: '3256 Spirit Dr'},
  {name: 'Quick Sandwich Shop', address: '2587 Cherry Ridge Dr'},
  {name: "Bobby's Burgers", address: '4152 Berkley St'},
  {name: 'Turnpike Diner', address: '4571 Central Ave'},
  {name: 'Bombay Express', address: '65 Queens Lane'},
  {name: 'Coffee Central', address: '3228 Oakwood Circle'},
  {name: "King's Garden", address: '2935 Victoria Ct'},
  {name: 'Salads and More', address: '2454 Preston St'},
]; */
