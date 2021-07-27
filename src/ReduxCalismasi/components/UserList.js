import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Button } from "react-native";
import User from "./User";

import { loadUsers } from "../redux/modules/global/actions";

const UserList = () => {
    const users  = useSelector(state => state.global.users);
    const dispatch = useDispatch();

    useEffect(() => {
        // redux-thunk desteği ile async metodu çağırıyoruz...
        dispatch(loadUsers());
    }, []);

    return (
        <View style={{flex : 1}}>
            <Text>User Count : {users.length}</Text>
            <View style={{padding : 5}}>
                {
                    users.map(user => {
                        return <User name={user.name} />
                    })
                }
            </View>
        </View>
    )
}

export default UserList;