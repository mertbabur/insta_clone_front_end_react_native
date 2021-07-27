import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SecondScreen = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                İkinci ekrandayım!
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Second")} style={styles.button}>
                <Text style={styles.text}>3. Ekrana Git</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f15152",
    },
    button: {
        width: "70%",
        height: 50,
        backgroundColor: "#5eeab8",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 4,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#003459",
    },
};
export default SecondScreen;