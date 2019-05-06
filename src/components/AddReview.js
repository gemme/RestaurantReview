import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddReview = ({navigation}) => {
    return (
        <View style={styles.root}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.goBack();
                }}
                >
                <Icon name="close" size={30} color={"#0066CC"}/>
            </TouchableOpacity>
            <Text
                style={styles.addReview}>Restaurant Review</Text>
        </View>
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
    }
});