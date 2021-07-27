import * as React from "react";
import {Text, View} from "react-native";
import { styles } from "./style"

const Main = props => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textStyle}>Header</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.side}>
                    <Text style={styles.textStyle}>Side</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.textStyle}>Content</Text>
                </View>

            </View>
            <View style={styles.footer}>
                <Text style={styles.textStyle}>Footer</Text>
            </View>

        </View>
    );
};
export default Main;