import * as React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


const HesapMakinesi = props => {

    return (
        <View style={styles.container}>

            <View style={styles.resultContainer}>
                <View style={styles.resultTop}><Text style={styles.resultTopText}>15 + 20</Text></View>
                <View style={styles.resultBottom}>
                    <View style={{flex:1, alignItems: 'flex-end'}}>
                        <Text style={styles.textNum}>5000000000</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.deleteButton}><Icon name="backspace" size={25} color={"#636363"} /></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.numKeyboardContainer}>
                <View style={styles.numPadRow}>
                    <TouchableOpacity style={{flex:2, backgroundColor: "#4355b8", justifyContent:"center", alignItems:"center", marginRight:1, marginBottom:1, marginLeft:1}}>
                        <Text style={styles.touchTextSize}>CLEAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacity}><Text style={styles.touchTextSize}>%</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacity}><Text style={styles.touchTextSize}>/</Text></TouchableOpacity>
                </View>
                <View style={styles.numPadRow}>
                    <TouchableOpacity style={styles.touchableOpacityNum}><Text style={styles.touchTextSizeNum}>7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacityNum}><Text style={styles.touchTextSizeNum}>8</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacityNum}><Text style={styles.touchTextSizeNum}>9</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacity}><Text style={styles.touchTextSize}>X</Text></TouchableOpacity>
                </View>
                <View style={styles.numPadRow}>
                    <TouchableOpacity style={styles.touchableOpacityNum}><Text style={styles.touchTextSizeNum}>4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacityNum}><Text style={styles.touchTextSizeNum}>5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacityNum}><Text style={styles.touchTextSizeNum}>6</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacity}><Text style={styles.touchTextSize}>-</Text></TouchableOpacity>
                </View>
                <View style={styles.numPadRow}>
                    <TouchableOpacity style={styles.touchableOpacityNum}><Text style={styles.touchTextSizeNum}>1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacityNum}><Text style={styles.touchTextSizeNum}>2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacityNum}><Text style={styles.touchTextSizeNum}>3</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacity}><Text style={styles.touchTextSize}>+</Text></TouchableOpacity>
                </View>
                <View style={styles.numPadRow}>
                    <TouchableOpacity style={styles.touchableOpacityNum}><Text style={styles.touchTextSizeNum}>0</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacityNum}><Text style={styles.touchTextSizeNum}>00</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacityNum}><Text style={styles.touchTextSizeNum}>.</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacity}><Text style={styles.touchTextSize}>=</Text></TouchableOpacity>
                </View>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    resultContainer:{
        flex: 1
    },
    resultTop:{
        flex:1,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    resultTopText:{
        fontSize: 20,
        marginRight: 50,
        color: "#787878"
    },
    resultBottom:{
        flex:1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textNum:{
        color:'#787878',
        fontSize: 30,
        marginRight: 20
    },
    deleteButton:{
        width: 30,
        height: 30,
        marginRight: 10,
    },
    numKeyboardContainer:{
        flex:4,
        backgroundColor: "#fff"
    },
    touchableOpacity:{
        flex:1,
        backgroundColor: "#4355b8",
        justifyContent:"center",
        alignItems:"center",
        marginRight:1,
        marginBottom:1
    },
    touchableOpacityNum:{
        flex:1,
        backgroundColor: "#fff",
        justifyContent:"center",
        alignItems:"center",
        marginRight:1,
        marginBottom:1
    },
    touchTextSize:{
        color:"white",
        fontSize:30
    },
    touchTextSizeNum:{
        color:"#9c9c9c",
        fontSize:30
    },
    numPadRow:{
        flex:1,
        flexDirection:"row"
    }
});


export default HesapMakinesi;