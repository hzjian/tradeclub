import React, { Component,userState } from 'react';
import { Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, StatusBar, Image,ListItem} from 'react-native';
import Header from '../components/Header';
//import { uuid } from 'uuidv4';

// const [items,setItems] = userState([
//     {id: uuid(),title:"milk1"},
//     {id: uuid(),title:"milk2"},
//     {id: uuid(),title:"milk3"},
//     {id: uuid(),title:"milk4"},
// ]);

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      name:'name1',
      iconName:'../assets/images/icon.png',
      subName:'subName1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      name:'name2',
      iconName:'../assets/images/icon.png',
      subName:'subName2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      name:'name3',
      iconName:'../assets/images/icon.png',
      subName:'subName3',
    },
  ];

const Item = ({ title }) => (
    <TouchableOpacity style={styles.item}>
      <Image
          style={styles.logo}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
          />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

const  ItemSeprator = () => <View style={{
    height: 2,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  }} /> 

class HomeScreen extends Component {
    render() {
        return (
        <SafeAreaView>
            <FlatList style={styles.item}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={this.ItemSeprator}
            />
        </SafeAreaView>
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