const INITIAL_STATE = {
    reviews: [],
    isSubmitting: false,
    submittedError: false
};

const review = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'LOAD_REVIEWS':
            console.log(action);
            return {
                ...state,
                reviews: action.data
            };
        case 'ADD_REVIEW':
            return {
                ...state,
                reviews: [...state.reviews, action.data]
            };
        case 'SUBMITTING_REVIEW':
            return {
                ...state,
                isSubmitting: action.data
            };
        case 'SUBMITTED_REVIEW_ERROR':
            return {
                ...state,
                submittedError: action.data
            };
        default:
            return state;
    }
};

export default review;