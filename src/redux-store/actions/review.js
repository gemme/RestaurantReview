import axios from 'axios';
import { IP_ADDRESS } from '../../constants';

export const loadReviews = (restaurantId) => {
    console.log('restaurantId', restaurantId);
    return (dispatch) => {
        axios.get(`http://${IP_ADDRESS}:3000/api/Restaurants/${restaurantId}/reviews`)
            .then(response => {
                dispatch({
                    type: 'LOAD_REVIEWS',
                    data: response.data
                })
            })
            .catch(err => console.error('my error: ', err))
    }
}

export const submitReview = ({restaurantId, name, rating, comment, navigation}) => {
    return dispatch => {
        dispatch({
            type: 'SUBMITTING_REVIEW',
            data: true
        });
        axios.post(`http://${IP_ADDRESS}:3000/api/Reviews`,{
            restaurantId,
            name,
            rating,
            comment
        })
            .then(response => {
                dispatch({
                    type: 'ADD_REVIEW',
                    data: response.data
                });
                dispatch({
                    type: 'SUBMITTING_REVIEW',
                    data: false
                });
                navigation.goBack();
            })
            .catch(err => {
                console.error("Error: ", err);
                dispatch({
                    type: 'SUBMITTING_REVIEW',
                    data: false
                });
                dispatch({
                    type: 'SUBMITTING_REVIEW_ERROR',
                    data: err
                });
            })
    }
}