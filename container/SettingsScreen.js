import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'
import { Divider } from 'react-native-elements';

const SettingsScreen =({navigation}) => {
        return (
           <View>
               <Divider style={{ backgroundColor: 'grey' }} />
               <Button
                    onPress={() => navigation.navigate('Help')}
                    title="帮助"
                />
                <Divider style={{ backgroundColor: 'white' }} />
                 <Button
                    onPress={() => navigation.navigate('Login')}
                    title="登录/注册"
                />
                <Divider style={{ backgroundColor: 'white' }} />
                <Button style={{backgroundColor:'blue'}}
                    onPress={() => navigation.navigate('About')}
                    title="关于"
                />
           </View>
          );
}

export default SettingsScreen
