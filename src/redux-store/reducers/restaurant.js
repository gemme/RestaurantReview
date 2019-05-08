const INITIAL_STATE = {
    places: []
};


const restaurant = (state = INITIAL_STATE, action) => {
    console.log('Reducer:restaurant', action);
    switch(action.type) {
        case 'LOAD_RESTAURANTS':
            return {
                ...state,
                places: action.data
            }
        default:
            return state;
    }
}

export default restaurant;