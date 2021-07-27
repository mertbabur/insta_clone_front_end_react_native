import * as React from "react";
import {
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
                    <Text style={styles.titleText}>MEMBER LOGIN</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.textInputView}>
                        <Icon name="user" size={25} color={"#c7c8ca"}  style={styles.icon}/>
                        <TextInput placeholder={"Username"} placeholderTextColor={"#8c847d"} style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.textInputView}>
                        <Icon name="lock" size={25} color={"#c7c8ca"}  style={styles.icon}/>
                        <TextInput placeholder={"Password"} placeholderTextColor={"#8c847d"} style={styles.textInput}></TextInput>
                    </View>
                    <TouchableOpacity style={[styles.button, {backgroundColor: "#cdc9c6"}]}><Text style={styles.text}>LOGIN</Text></TouchableOpacity>
                    <TouchableOpacity style={{alignItems: "center", marginTop:20}}><Text style={{color:"rgba(255,255,255,0.36)"}}>Forgot Password? Click Here</Text></TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                    <View style={{borderWidth: 0.3, borderColor:"#fff", flex:0.01, marginTop: 10}}></View>
                    <TouchableOpacity onPress={() => navigation.navigate("Sign")} style={[styles.button, {backgroundColor: "#7e9b85"}]}><Text style={styles.text}>REGISTER</Text></TouchableOpacity>
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
        marginTop:70,
        marginBottom:80,
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
        flex:4,
        paddingHorizontal:30
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
        padding: 17.5,
        paddingRight:180,
        backgroundColor: "#262c2f"
    },
    icon:{
        padding:20,
        backgroundColor: "#46494e"
    },
    button:{
        backgroundColor:"#00f",
        padding: 15,
        marginHorizontal: 20,
        marginTop: 20
    },
    text: {
        fontSize: 15,
        textAlign: "center",
        color: "#46494e",
        fontWeight: "bold"
    }
});


export default LoginScreen;