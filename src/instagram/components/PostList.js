import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {View, Text, Button, Image, StyleSheet, FlatList} from "react-native";
import {loadPost} from "../redux/modules/story/actions";
import Icon from "react-native-vector-icons/Entypo";
import Slideshow from "react-native-image-slider-show";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialComIcon from "react-native-vector-icons/MaterialCommunityIcons";


const StoryList = () => {
    const postList  = useSelector(state => state.post.posts);
    const dispatch = useDispatch();


    useEffect(() => {
        // redux-thunk desteği ile async metodu çağırıyoruz...
        dispatch(loadPost());
    }, []);

    const renderItemPost = ({item}) => {
        return <View style={{flex:1}}>
            <View style={styles.postTop}>
                <View style={styles.postTopLeft}>
                    <Image style={styles.postTopImage} source={{uri: item.userImage}} />
                    <Text style={styles.postTopName}>{item.name}</Text>
                </View>
                <View style={styles.postTopRight}>
                    <Icon name="dots-three-horizontal" size={20} color={"#3b3a3a"}/>
                </View>
            </View>
            <View style={styles.postMid}>
                <Slideshow arrowSize={0}
                           dataSource={[
                               { url:item.postImage },
                               { url:item.postImage },
                           ]}/>
            </View>
            <View style={styles.postBottom}>
                <View style={styles.postBottomLeft}>
                    <Ionicons name="heart-outline" size={25} color={"#3b3a3a"}/>
                    <Feather name="message-circle" size={25} color={"#3b3a3a"} style={{marginLeft:10}} />
                    <FontAwesome5 name="location-arrow" size={20} color={"#3b3a3a"} style={{marginLeft:10, marginTop:2}} />
                </View>
                <View styles={styles.postBottomRight}>
                    <MaterialComIcon name="bookmark-outline" size={25} color={"#3b3a3a"} />
                </View>

            </View>
            <View style={styles.postLikeComment}>
                <Text><Text style={{fontWeight: "bold"}}>{item.likeCount}</Text> diğer kişi beğendi </Text>
                <Text style={{color:"rgba(0,0,0,0.38)"}}>{item.commentCount} yorumun tümünü gör </Text>
            </View>

        </View>
    }

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={postList}
            renderItem={renderItemPost} />
    )
}

const styles = StyleSheet.create({
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

export default StoryList;