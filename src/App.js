import React, {useState} from 'react';
//import {Button, Provider as PaperProvider} from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from "./style_flexbox_islemleri/style"
import Main from "./style_flexbox_islemleri/Main";
import StateKavrami from "./state_kavrami/Main";
import FormIslemleri from "./form_islemleri/FormIslemleri";
import ToDoList from "./toDoListApp/ToDoList";
import TasarimEx from "./tasarimEx/TasarimEx";
import HesapMakinesi from "./hesapMakinesi/HesapMakinesi";
import LoginScreen from "./loginSignInScreen/LoginScreen";
import Pages from "./loginSignInScreen/Pages";
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Badge, BottomSheet, Button, ButtonGroup, ListItem, ThemeProvider} from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import InstaPages from "./instagram/InstaPages";
import MyTabs from "./instagram/MyTabs";

import {Provider} from "react-redux";
import ReduxMain from "./ReduxCalismasi/ReduxMain";
import configureStore from "./instagram/redux/store";

const store = configureStore();


export default function App() {

  return (
      //<MyStack/>
      // <Main/>
      //<StateKavrami/>
      //<FormIslemleri/>
      //<TasarimEx/>
      //<HesapMakinesi/>
      //<LoginScreen/>
      //<Pages/>
        //<InstaPages/>
      //<MyTabs/>

      <Provider store={ store }>
        <MyTabs/>
      </Provider>



  );
}



