import React, { Component,userState } from 'react';
import { Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, StatusBar, Image,ListItem} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import BusSummary from './BusSummary';
import NewsScreen from './NewsScreen';
import SettingsScreen   from './SettingsScreen'; 
import CompanyScreen   from './CompanyScreen'; 
import ShowElementScreen from './showelement/ShowElementScreen';
import MainScreen from './MainScreen';
const Tab = createBottomTabNavigator();

class HomeScreen extends Component {
    render() {
        return (
          <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Main') {
                //iconName = focused? 'home':'home-lg';
                iconName ='home';
              } else if (route.name === 'Bussiness') {
                iconName = 'users';
              } else if (route.name === 'Company') {
                iconName = 'building';
              } else if (route.name === 'Settings') {
                iconName = 'cog';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Main" component={NewsScreen} options={{  tabBarLabel:"主页" }}/>
          <Tab.Screen name="Bussiness" component={ShowElementScreen} options={{  tabBarLabel:"协会" }}/>
          <Tab.Screen name="Company" component={CompanyScreen}  options={{  tabBarLabel:"企业" }}/>
          <Tab.Screen name="Settings" component={SettingsScreen}  options={{  tabBarLabel:"设置" }} />
        </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
    item:{
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    logo: {
      width: 32,
      height: 32,
    },
})

export default HomeScreen;