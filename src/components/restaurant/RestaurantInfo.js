import React from 'react';

import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import Stars from 'components/Stars';
import ReviewList from 'components/review/ReviewList';

const IP_ADDRESS = Platform.OS === "android" ? "10.0.2.2" : "localhost";

const RestaurantList = ({ navigation }) => {
    const place = navigation.getParam('place');

    return (
        <View style= {styles.root}>
            <View style={styles.infoHeader}>
                <Image
                    source={{
                        uri: `http://${IP_ADDRESS}:3000/api/Containers/images/download/${place.image}`,
                    }}
                    style={styles.image}
                    resizeMode="contain"
                    />
                <View style={styles.info}>
                    <Text style={styles.name}>{place.name}</Text>
                    <Text style={styles.address}>{place.address}</Text>
                    <Stars rating={place.rating}/>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={ ()=> {
                            navigation.navigate('AddReview', {
                                restaurantId: place.id
                            })
                        }}>
                        <Text style={styles.buttonText}>Review</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <ReviewList restaurantId={place.id}/>
            </ScrollView>
        </View>
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