/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Colors,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import BusSummary from './container/BusSummary';
import AboutScreen from './container/AboutScreen';
import HomeScreen   from './container/HomeScreen';
import SettingsScreen   from './container/SettingsScreen'; 
import  HelpScreen from './container/help/HelpScreen';
import  { LoginScreen,RegisterScreen } from './container/login';
import DetailScreen from './container/showelement/DetailScreen';

const Stack = createStackNavigator();


const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
          options = {{title:"十堰市专用汽车行业协会",headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
          }}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} options = {{title:"设置"}}/>
        <Stack.Screen name="Help" component={HelpScreen} options = {{title:"帮助"}}/>
        <Stack.Screen name="Login" component={LoginScreen} options = {{title:"登录"}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options = {{title:"注册"}}/>
        <Stack.Screen name="About" component={AboutScreen} options = {{title:"关于"}}/>
        <Stack.Screen name="Detail" component={DetailScreen} options = {{title:""}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  hometab:{
    backgroundColor: 'blue',
    color:"red",
    fontSize: 26,
    fontFamily: 'bold',
  }
})

export default App;
