import * as React from "react";
import {FlatList, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import { styles } from "./style"
import {useState} from "react";
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from "./components/Header";
import TodoItem from "./components/TodoItems";
import AddTodo from "./components/AddTodo";

const ToDoList = props => {
    const[todos, setTodos]=useState([
        {text:'bilardo',key:'1'},
        {text:'bowling',key:'2'},
        {text:'satranç',key:'3'}
    ]);

    const pressHandler=(key)=>{
        setTodos((prevTodos)=>{
            return prevTodos.filter(todos=>todo.key != key);
        })
    }

    const submitHandler=(text)=>{
        setTodos((prevTodos)=>{
            return [
                {text:text, key:Math.random().toString()},
                ...prevTodos
            ];
        })
    }

    return (
        <View style={styles.container1}>
            <Header/>
           <View style={styles.content}>

               <AddTodo submitHandler={submitHandler}/>

               <View style={styles.list}>
                   <FlatList
                       data={todos}
                       renderItem={({item})=> (
                           <TodoItem item={item} pressHandler={pressHandler}/>
                       )} />
               </View>
           </View>

        </View>
    );
};



export default ToDoList;