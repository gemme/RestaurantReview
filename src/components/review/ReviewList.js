import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import ReviewRow from 'components/review/ReviewRow';

import axios from 'axios';

const ReviewList = ({restaurantId}) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/Restaurants/${restaurantId}/reviews`)
        .then(response => setReviews(response.data))
        .catch(err => console.error('my error: ', err))
    }, [reviews]);

    return (
        <View style={styles.root}>
            <FlatList
                data={reviews}
                renderItem={({item})=>{
                    return <ReviewRow name={item.name} comment={item.comment} rating={item.rating}/>
                }}
            />
        </View>
    );
};

export default ReviewList;

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
});