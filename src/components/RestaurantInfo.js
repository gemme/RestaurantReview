import React from 'react';

import {
    ScrollView,
    View,
    Text,
    StyleSheet
} from 'react-native';
import Stars from 'components/Stars';

const RestaurantList = (props) => {
    const place = props.navigation.getParam('place');
    return (
        <ScrollView style= {styles.root}>
            <View style={styles.info}>
                <Text style={styles.name}>{place.name}</Text>
                <Text style={styles.address}>{place.address}</Text>
                <Stars rating={place.rating}/>
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
    }
})

export default RestaurantList;