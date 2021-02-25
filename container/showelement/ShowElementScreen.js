import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {  Card, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width } = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const data = [
  {
    id: '1',
    title: 'Manarola, Italy',
    description: 'The Cliffs of Cinque Terre',
    image_url: require('../../assets/images/photo-1516483638261-f4dbaf036963.jpeg'),
    iconName: 'location-pin'
  },

  {
    id: '2',
    title: 'Venezia, Italy',
    description: 'Rialto Bridge, Venezia, Italy',
    image_url: require('../../assets/images/photo-1523906834658-6e24ef2386f9.jpeg'),
    iconName: 'location-pin'
  },
  {
    id: '3',
    title: 'Prague, Czechia',
    description: 'Tram in Prague',
    image_url: require('../../assets/images/photo-1513805959324-96eb66ca8713.jpeg'),
    iconName: 'location-pin'
  }
];

export default function ShowElementScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar hidden />
      {/* Header */}
      <View style={{ marginTop: 50, marginBottom: 20, paddingHorizontal: 20 }}>
        <Text style={{ color: '#888', textTransform: 'uppercase' }}>
          主要活动
        </Text>
        <Text style={{ color: '#888', fontSize: 24, fontWeight: '600' }}>
          2020年
        </Text>
      </View>
      <View style={{ flex: 1, paddingBottom: 20 }}>
        <ScrollView
          indicatorStyle='white'
          contentContainerStyle={{ alignItems: 'center' }}
        >
          {data.map(item => (
            <Card key={item.id} style={{ fontSize: 18 ,height: 80, width: ITEM_WIDTH}} >
              <TouchableHighlight 
                activeOpacity={0.8}
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate('Detail', { item })}
              >
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={item.image_url} style={{ flexDirection: 'column', height: 80, width:80}}/>
                    <View style={{ flexDirection: 'column', paddingLeft: 6 , width:ITEM_WIDTH-100}}>
                      <Text>{item.title}</Text>
                      <Text>{item.description}</Text>
                    </View>
                    <Icon name="angle-right"  size={20}
                    style={{ paddingTop: 30 ,  flexDirection: 'column'}}/>
                  </View>
              </TouchableHighlight>
            </Card>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}