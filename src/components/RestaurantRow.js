import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default ({place, index}) => {
    return (
        <View style={{ flexDirection: 'row' }}>
        <View style={styles.index}>
            <Text>{index+1}</Text>
        </View>
        <View style={styles.address}>
            <Text>{place.name}</Text>
            <Text style={{color: 'grey'}}>{place.address}</Text>
        </View>
        <View style={styles.info}>
            <Text>Info</Text>
        </View>
        </View>
    );
};

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
  }
});