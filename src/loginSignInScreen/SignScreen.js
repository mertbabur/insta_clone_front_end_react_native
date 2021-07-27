import * as React from "react";
import {
    Image,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Icon  from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native";

const LoginScreen = props => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>MEMBER SIGN</Text>
                </View>
                <View style={styles.content}>
                    <Image source={{uri: "https://images.unsplash.com/photo-1625635284498-f5744e059a71"}} style={styles.avatar}/>
                    <TouchableOpacity><Text style={styles.text}>Resim Seç</Text></TouchableOpacity>
                    <TextInput placeholder={"Name"} placeholderTextColor={"#8c847d"} style={styles.textInput}></TextInput>
                    <TextInput placeholder={"Surname"} placeholderTextColor={"#8c847d"} style={styles.textInput}></TextInput>
                    <TextInput placeholder={"Username"} placeholderTextColor={"#8c847d"} style={styles.textInput}></TextInput>
                    <TextInput secureTextEntry={true} placeholder={"Password"} placeholderTextColor={"#8c847d"} style={styles.textInput}></TextInput>
                </View>
                <View style={styles.bottom}>
                    <View style={{borderWidth: 0.5, borderColor:"#fff", flex:0.01}}></View>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")} style={[styles.button, {backgroundColor: "#7e9b85"}]}><Text style={styles.text}>LOGIN</Text></TouchableOpacity>
                </View>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#829884',
    },
    loginContainer: {
        flex:1,
        marginTop:30,
        marginBottom:30,
        marginRight:20,
        marginLeft:20,
        backgroundColor: '#343d44',
        borderRadius: 10
    },
    title:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    content:{
        flex:6,
        paddingHorizontal:30,
        alignItems: "center"
    },
    bottom:{
        flex:1.5,
        paddingHorizontal:30
    },
    titleText:{
        color: "#809095",
        fontSize: 25
    },
    textInputView:{
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    textInput:{
        borderWidth: 1,
        padding: 5,
        paddingRight:180,
        backgroundColor: "#262c2f",
        marginTop: 10
    },
    icon:{
        padding:20,
        backgroundColor: "#46494e"
    },
    button:{
        backgroundColor:"#00f",
        padding: 15,
        marginHorizontal: 20,
        marginTop: 10
    },
    text: {
        fontSize: 15,
        textAlign: "center",
        color: "#7d8184",
        fontWeight: "bold"
    },
    avatar:{
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#373A3D',
        marginTop: 10
    }
});


export default LoginScreen;