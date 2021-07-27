import * as React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import { styles } from "./style"
import {useState} from "react";

const StateKavrami = props => {
    const [sayi, setSayi] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                setSayi(sayi+1);
                console.log(sayi);
            }} style={styles.buttonPlus}>
                <Text style={styles.textStyle}>+</Text>
            </TouchableOpacity>

            <Text style={styles.textStyleCounter}>{sayi}</Text>

            <TouchableOpacity onPress={() => {
                setSayi(sayi-1);
                console.log(sayi);
            }}
                style={styles.buttonMinus}>
                <Text style={styles.textStyle}>-</Text>
            </TouchableOpacity>
        </View>
    );
};
export default StateKavrami;