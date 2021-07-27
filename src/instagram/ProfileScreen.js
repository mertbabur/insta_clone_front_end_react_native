import * as React from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import Ionicons  from 'react-native-vector-icons/Ionicons';
import Feather  from 'react-native-vector-icons/Feather';
import MaterialComIcon  from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";


const ProfileScreen = props => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Ionicons name="lock-closed" size={20} color={"#3b3a3a"}/>
                </View>
                <View style={styles.headerRight}></View>
            </View>
            <View style={styles.content}></View>
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    header:{
        flex:1,
        backgroundColor: "#0f0",
        justifyContent: "space-between",
        alignItems: "center"


    },
    content:{
        flex:8,
        backgroundColor: "#f00"
    },
    headerRight:{

    },
    headerLeft:{

    }

})


export default ProfileScreen;

