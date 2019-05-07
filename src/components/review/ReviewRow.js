import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import NonAvatar from '../../images/default-user.png'
import Stars from '../Stars';

const ReviewRow = ({name, comment, rating}) => {
    return (
        <View style={styles.root}>
            <View style={styles.edges}>
                <Image
                    style={styles.avatar}
                    source={NonAvatar}/>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            <Stars rating={rating}/>
            <Text>{comment}</Text>
        </View>
    );
};

export default ReviewRow;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    nameText: {
        padding: 5
    },
    edges:{
        flexDirection: 'row',
        padding: 5
    },
    avatar: {
        height: 20,
        width: 20,
        borderRadius: 5
    }
})