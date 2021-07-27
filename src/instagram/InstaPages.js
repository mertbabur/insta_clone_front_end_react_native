import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import DmScreen from "./DmScreen"

const Pages = props => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home" headerMode={"none"}>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="dm" component={DmScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Pages;