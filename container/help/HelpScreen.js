import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

const HelpScreen = ({navigation}) =>{

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button onPress={() => navigation.goBack()} title="Go back home" />
            </View>
        )
}

export default HelpScreen
