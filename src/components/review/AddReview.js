import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    Platform
} from 'react-native';
import {
    KeyboardAwareScrollView
 } from "react-native-keyboard-aware-scroll-view";
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import * as reviewActions from 'redux-store/actions/review';

const AddReview = ({navigation, submitReview, isSubmitting}) => {
    const restaurantId = navigation.getParam('restaurantId');
    const [name, setName] = useState(null);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    return (
        <KeyboardAwareScrollView
            style={{
                flex: 1,
                backgroundColor:'#FFF'
            }}
        >
            <View style={styles.root}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.goBack();
                    }}
                    >
                    <Icon name="close" size={30} color={"#0066CC"}/>
                </TouchableOpacity>
                <Text style={styles.addReview}>Restaurant Review</Text>
                <TextInput
                    style={styles.input}
                    placeholder={"Name (optional)"}
                    value={name}
                    onChangeText={name => setName(name)}
                    />
                <Text style={styles.rating}>Your rating:</Text>
                <View
                    style={styles.stars}>
                    { [1,2,3,4,5].map(i => {
                        return (
                            <TouchableOpacity
                                style={styles.startButton}
                                key={i}
                                onPress={() => {
                                    setRating(i)
                                }}>
                                <Icon
                                    name="star"
                                    size={50}
                                    color={ rating >= i ? "#FFD64C" : "#CCCCCC"}/>
                            </TouchableOpacity>)
                        })
                    }
                </View>
                <TextInput
                    style={[
                        styles.input,
                        { height:100}
                    ]}
                    placeholder={"Review"}
                    value={comment}
                    onChangeText={comment => setComment(comment)}
                    multiline={true}
                    numberOfLines={5}
                    />
                     {isSubmitting &&
                        <ActivityIndicator
                        size="large"
                        color="#0066CC"
                        style={{
                            padding: 10
                        }}/>
                    }
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => {
                        submitReview({restaurantId, name, rating, comment, navigation});
                    }}
                    disabled={isSubmitting}>
                    <Text
                        style={styles.submitButtonText}>Submit Review</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};

const mapStateToProps = state => {
    const {isSubmitting} = state.review;
    return {
        isSubmitting
    };
};

const mapDispatchToProps = dispatch => {

    return {
        submitReview: (args) => dispatch(reviewActions.submitReview(args))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);

/* const submitReview = ({restaurantId, name, rating, comment, setSubmitting, navigation}) => {
    const data = {
        "restaurantId": restaurantId,
        "name": name,
        "rating": rating,
        "comment": comment
    };
    console.log('POST:data', data);
    setSubmitting(true);
    axios.post(`http://${IP_ADDRESS}:3000/api/Reviews`,data)
    .then(response => {
        console.log('response', response);
        setSubmitting(false);
        navigation.goBack();
    })
    .catch(err => {
        console.error("Error: ", err);
        setSubmitting(false);
    })
} */

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20
    },
    button: {
        paddingHorizontal: 10
    },
    addReview: {
        fontSize: 15,
        color: "#444",
        textAlign: "center",
        margin: 20
    },
    input: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 3
    },
    rating:{
        fontSize: 20,
        color: 'grey',
        textAlign: 'center',
        marginVertical: 40
    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 80
    },
    startButton: {
        padding: 5
    },
    submitButton:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#0066CC",
        borderRadius: 4,
        marginVertical: 10,
        marginHorizontal: 20
    },
    submitButtonText: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 18
    }
});