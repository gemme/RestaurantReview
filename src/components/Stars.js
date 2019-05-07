import React from 'react';

import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stars = ({rating}) => {
    //const stars = [...Array(Math.ceil(rating))];
    const MAX_STARS = 5;
    const stars = [...Array(MAX_STARS)];
    return (
        <View style={{ flexDirection: 'row' }}>
            {
                stars.map((_, i) => {
                    const name = Math.floor(rating) > i ? 'star' : 'star-half';
                    const color = Math.ceil(rating) > i ? "#FFD64C" : "#CCC" ;
                    return <Icon key={i} name={"star"} color={color}/>
                })
            }
        </View>
    )
};

export default Stars;