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
import RestaurantRow from 'components/RestaurantRow';
import axios from 'axios';
import PizzaImage from 'images/pizza.png';

type Props = {};
const RestaurantList = (props: Props) => {

    const [search, setSearch] = useState('');
    const [restaurants, setRestaurants] = useState([]);
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
            restaurants
              .filter(place => {
                return !search ||
                  place.name.toLowerCase().indexOf(search.toLowerCase()) > -1
              })
          }
          renderItem={({item, index}) =>
            <RestaurantRow
                place={item}
                index={index}
                navigation={props.navigation}
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

export default RestaurantList;

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