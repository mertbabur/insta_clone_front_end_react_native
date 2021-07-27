import * as React from "react";
import {

    View,
    StyleSheet, FlatList, Text, Image
} from "react-native";
import Icon  from 'react-native-vector-icons/Entypo';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import Feather  from 'react-native-vector-icons/Feather';
import MaterialComIcon  from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from "@react-navigation/native";
import {Header,Badge, BottomSheet, Button, ButtonGroup, ListItem, ThemeProvider} from 'react-native-elements';
import {useState} from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Slideshow from "react-native-image-slider-show";
import StoryList from "./components/StoryList";
import PostList from "./components/PostList";


const HomeScreen = props => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header
                    leftComponent={{ icon: 'camera', type:"simple-line-icon", color: '#fff', iconStyle: { color: '#7a7979', marginVertical:20 } }}
                    centerComponent={{ text: 'INSTAGRAM', style: { color: '#7a7979', marginVertical:20 } }}
                    rightComponent={{ icon: 'new-message', type: "entypo", color: '#7a7979', marginVertical:20 }}
                    containerStyle={{backgroundColor: "#f9f9f9"}}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.story}>
                    <StoryList/>
                </View>
                <View style={styles.post}>
                    <PostList/>
                </View>
            </View>
        </View>

    );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },

    header:{
        flex:1.5,
        backgroundColor:"#ff0",

    },

    content:{
        flex:9.5,
    },

    story:{
        flex:2,
        marginHorizontal: 5,
        backgroundColor:"#fafafa",
        borderTopWidth: 1,
        borderBottomWidth: 0.5,
        borderColor: "rgba(0,0,0,0.24)"
    },
    renderItemView:{
        justifyContent:"center",
        alignItems:"center",
        marginRight:5
    },
    renderItemImage:{
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#c12c55'
    },
    renderItemText:{
        fontSize: 13,
        color: "rgba(0,0,0,0.69)"
    },

    post:{
        flex:10,
    },
    postTop:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderColor: "rgba(0,0,0,0.24)"
    },
    postTopLeft:{
        marginLeft: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    postTopRight:{
        marginRight: 20,
        justifyContent: "center"
    },
    postTopImage:{
        width:40,
        height: 40,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#c12c55',
        marginVertical: 5

    },
    postTopName:{
        marginLeft: 10
    },
    postMid:{
        flex:5,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderColor: "rgba(0,0,0,0.24)"
    },
    postBottom:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        marginHorizontal: 10,
        marginVertical: 5
    },
    postBottomRight:{
        flex:1,
        flexDirection: "row",
    },
    postBottomLeft:{
        flex:1,
        marginRight: 20,
        flexDirection: "row",
    },
    postLikeComment:{
        paddingHorizontal: 10
    }

})


export default HomeScreen;