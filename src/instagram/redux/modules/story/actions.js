export const loadStory = () => {
    return async (dispatch, getState) => {
        try {
            let result = await fetch('https://60ef137af587af00179d38c8.mockapi.io/api/story').then(response => response.json());
            dispatch({
                type : "STORY_LOAD_COMPLETED",
                payload : result
            });
        } catch (err) {
            console.log(err);
        }
    }
}

export const loadPost = () => {
    return async (dispatch, getState) => {
        try {
            let result = await fetch('https://60ef137af587af00179d38c8.mockapi.io/api/post').then(response => response.json());
            dispatch({
                type : "POST_LOAD_COMPLETED",
                payload : result
            });
        } catch (err) {
            console.log(err);
        }
    }
}