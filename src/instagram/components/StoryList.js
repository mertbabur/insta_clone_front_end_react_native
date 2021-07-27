import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {View, Text, Button, Image, StyleSheet, FlatList} from "react-native";
import {loadStory} from "../redux/modules/story/actions";


const StoryList = () => {
    const storyList  = useSelector(state => state.story.stories);
    const dispatch = useDispatch();


    useEffect(() => {
        // redux-thunk desteği ile async metodu çağırıyoruz...
        dispatch(loadStory());
    }, []);

    const renderItemStory = ({item}) => {
        return <View style={styles.renderItemView}>
            <Image style={styles.renderItemImage} source={{uri:item.Image}} />
            <Text style={styles.renderItemText}>{item.name}</Text>

        </View>
    }

    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={storyList}
            renderItem={renderItemStory}
        />
    )
}

const styles = StyleSheet.create({
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
    }

})

export default StoryList;