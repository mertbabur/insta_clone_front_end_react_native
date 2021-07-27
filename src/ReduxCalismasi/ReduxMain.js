import React, {useCallback} from "react";
import { View, Text, Button } from "react-native";

import UserList from "./components/UserList";

const ReduxMain = () => {

    return (
        <View style={{flex : 1, paddingTop : 20}}>
            <UserList />
        </View>
    )
}

export default ReduxMain;