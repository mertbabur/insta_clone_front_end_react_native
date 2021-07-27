import * as React from "react";
import {
    Text,
    View,
} from "react-native";
import Icon  from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native";


const DiscoverScreen = props => {
    const navigation = useNavigation();
    return (
        <View style={{flex:1, backgroundColor:"#FFF", alignItems:"center", justifyContent:"center"}}>
            <Text>DISCOVER SCREEN</Text>
        </View>

    );
};




export default DiscoverScreen;