import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f15152",
    },
    buttonPlus: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f0',
        padding: 5,
        width: 50,
        height: 50,
        borderRadius: 50,
        marginBottom: 10,
    },
    buttonMinus: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        padding: 5,
        width: 50,
        height: 50,
        borderRadius: 50,
        marginTop: 10
    },
    textStyle: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center'

    },
    textStyleCounter: {
        fontSize: 36,
        color: '#fff'
    }
});