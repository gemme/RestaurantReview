import React from 'react';

import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Stars from 'components/Stars';

const RestaurantList = ({ navigation }) => {
    const place = navigation.getParam('place');
    return (
        <ScrollView style= {styles.root}>
        <View style={styles.infoHeader}>
                <View style={styles.info}>
                    <Text style={styles.name}>{place.name}</Text>
                    <Text style={styles.address}>{place.address}</Text>
                    <Stars rating={place.rating}/>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={ ()=> {
                            navigation.navigate('AddReview')
                        }}>
                        <Text style={styles.buttonText}>Review</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

RestaurantList.navigationOptions = {
    title: 'Restaurant Info'
};

const styles = StyleSheet.create({
    root: {
        flex:1,
        backgroundColor: '#fff'
    },
    infoHeader: {
        flexDirection: 'row'
    },
    info: {
        marginTop: 20
    },
    name: {
        fontSize: 24
    },
    address: {
        color: 'grey',
        marginBottom: 5
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    button: {
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff',
        marginTop: 10
      },
      buttonText: {
        color: '#0066CC',
        fontSize: 12,
        textAlign: 'center'
      }
})

export default RestaurantList;