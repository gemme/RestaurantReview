import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Platform
} from 'react-native';
import ReviewRow from 'components/review/ReviewRow';

import * as reviewActions from 'redux-store/actions/review';
import {connect} from 'react-redux';

const ReviewList = ({
    restaurantId,
    reviews,
    loadReviews
}) => {
    console.log('restaurantId', restaurantId);
    useEffect(() => {
        loadReviews();
    }, []);

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

const mapStateToProps = state => {
    const {review} = state;
    return {
        reviews: review.reviews
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadReviews: () => dispatch(reviewActions.loadReviews(ownProps.restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
});