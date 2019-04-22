/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import { HeaderStyle } from './HeaderStyle';

const restaurants = [
  {
    name: 'React Cafe',
    address: '123 Anywhere st'
  },{
    name: 'Fancy Restaurant',
    address: '799 Main st'
  },{
    name: 'Taco Place',
    address: '650 Maple Rd'
  }
];

type Props = {};
export default class App extends Component<Props> {

  state= {
    search: ''
  }

  render() {
    return (
      <View>
        <Text
        style={HeaderStyle.header}
        >Restaurant Review App</Text>
        <TextInput
          style={styles.input}
          placeholder='Live Search'
          onChangeText={
            text => {
              this.setState({ search: text })
          }}
          value={this.state.search}
        />
        {
          restaurants
          .filter(place => {
            return !this.state.search ||
              place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
          })
          .map((place, i) => {
            return (
            <View key={place.name}
              style={{
                flexDirection: 'row'
              }}>
              <View style={styles.index}>
                <Text>{i+1}</Text>
              </View>
              <View style={styles.address}>
                <Text>{place.name}</Text>
                <Text style={{color: 'grey'}}>{place.address}</Text>
              </View>
              <View style={styles.info}>
                <Text>Info</Text>
              </View>
            </View>
            )
          })
        }
    </View>
    );
  }
}

const styles = StyleSheet.create({
  index: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  address: {
    flex: 8,
    flexDirection: 'column'
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
})
