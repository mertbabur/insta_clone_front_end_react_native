import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        padding: 10,
    },
    temp: {
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    scrollView: {
        flex:3
    },
    textInput: {
        width: '100%',
        borderColor: '#00f',
        borderWidth: 1
    },
    buttonPlus: {
        width: '90%',
        height: 60,
        backgroundColor: '#00f',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        position: 'absolute',
        right: 30,
        bottom: 30

    },
    textStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25
    },
    container1:{
        flex:1,
        backgroundColor: '#fff',
    },
    item:{
        marginTop: 24,
        padding:30,
        backgroundColor: 'pink',
        fontSize: 24,
        marginHorizontal: 10
    },
    content: {
        padding: 40
    },
    list: {
        margin: 20
    }
});