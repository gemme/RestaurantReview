import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';
import {
    KeyboardAwareScrollView
 } from "react-native-keyboard-aware-scroll-view";
import Icon from 'react-native-vector-icons/FontAwesome';

const AddReview = ({navigation}) => {
    const [name, setName] = useState(null);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState(null);
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
                    value={review}
                    onChangeText={review => setReview(review)}
                    multiline={true}
                    numberOfLines={5}
                    />
                <TouchableOpacity
                    style={styles.submitButton}>
                    <Text
                        style={styles.submitButtonText}>Submit Review</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default AddReview;

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