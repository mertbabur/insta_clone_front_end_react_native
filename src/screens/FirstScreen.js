import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style"

const FirstScreen = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Birinci ekrandayım!
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Second")} style={styles.button}>
                <Text style={styles.text}>2. Ekrana Git</Text>
            </TouchableOpacity>
        </View>
    );
};


export default FirstScreen;