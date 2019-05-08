import axios from 'axios';
import { IP_ADDRESS } from '../../constants';

export const loadRestaurants = () => {
    return dispatch => {
        console.log('loadRestaurants:IP_ADDRESS', IP_ADDRESS);
            axios.get(`http://${IP_ADDRESS}:3000/api/Restaurants/`)
                .then(result => {
                console.log('axios::get');
                const { data } = result;
                    return dispatch({
                        type: 'LOAD_RESTAURANTS',
                        data
                    });
            })
    }
}
