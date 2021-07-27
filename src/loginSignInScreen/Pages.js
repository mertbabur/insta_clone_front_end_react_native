import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./LoginScreen";
import SignScreen from "./SignScreen"

const Pages = props => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Sign" component={SignScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Pages;