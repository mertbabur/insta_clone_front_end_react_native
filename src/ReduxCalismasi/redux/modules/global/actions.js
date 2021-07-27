export const loadUsers = () => {
    return async (dispatch, getState) => {
        try {
            let result = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
            dispatch({
                type : "USERS_LOAD_COMPLETED",
                payload : result
            });
        } catch (err) {
            console.log(err);
        }
    }
}

export const testAction = () => {
    return {
        type : "TEST_ACTION",
        payload : 5
    }
}