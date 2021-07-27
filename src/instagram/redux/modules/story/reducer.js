const initialState = {
    stories : [],
    posts : []
}

//REDUCER
// Set up reducer and switch
export const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "STORY_LOAD_COMPLETED":
            return {
                ...state,
                stories : action.payload
            }
        default:
            return state;
    }
};

//REDUCER
// Set up reducer and switch
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POST_LOAD_COMPLETED":
            return {
                ...state,
                posts : action.payload
            }
        default:
            return state;
    }
};
