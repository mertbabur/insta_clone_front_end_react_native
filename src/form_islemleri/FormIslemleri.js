import * as React from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import { styles } from "./style"
import {useState} from "react";
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const FormIslemleri = props => {

    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState('');

    const getFaktoriyel = value => {
        let f = 1;
        for(let index = 1; index <= value; index++){
            f *= index;
        }
        return f;
    };

    const checkUser = () => {
        if(email == 'mert' && password == '123'){
            alert('Basarili');
        }else{
            alert(email + " " + password);
        }
    }

    return (
        <View style={styles.container}>
            <Icon name="check-bold" size={32} color={"#0f0"} />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={value=>{
                    setEmail(value);
                }}
                style={styles.textInputStyle}/>

            <TextInput
                secureTextEntry
                placeholder="Şifre"
                value={password}
                onChangeText={value=>{
                    setPassword(value);
                }}
                style={styles.textInputStyle}/>

            <TouchableOpacity
                onPress={()=> checkUser()}
                style={styles.button}>
                <Text style={styles.textStyle}>Giriş</Text>
            </TouchableOpacity>

            <Text style={styles.textStyle }>hi</Text>
        </View>
    );
};
export default FormIslemleri;