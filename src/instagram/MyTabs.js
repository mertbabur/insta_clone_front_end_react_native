import * as React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DmScreen from "./DmScreen";
import HomeScreen from "./HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import DiscoverScreen from "./DiscoverScreen";
import ProfileScreen from "./ProfileScreen";
import ReelsScreen from "./ReelsScreen";

const Tab = createMaterialBottomTabNavigator();

const MyTabs = props => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#000"
                barStyle={{ backgroundColor: '#fafafa', borderTopWidth: 1, borderColor: "rgba(0,0,0,0.24)" }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="DISCOVER"
                    component={DiscoverScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="search1" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="REELS"
                    component={ReelsScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="camera" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="PROFİLE"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="user" color={color} size={26} />
                        ),
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default MyTabs;