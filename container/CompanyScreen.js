import React, { Component } from 'react'
import { Text, FlatList } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const iconpath ="../assets/images/";
const list = [
    {
      name: '****汽车有限公司',
      logo: '../assets/images/1231100.gif',
      subtitle: 'Vice President'
    },
    {
      name: '****汽车有限公司',
      logo: '../assets/images/1231100.gif',
      subtitle: 'Vice Chairman'
    },
    {
      name: '****汽车有限公司',
      logo: '../assets/images/1231100.gif',
      subtitle: 'Vice President'
    },
    {
      name: '****汽车有限公司',
      logo: '../assets/images/1231100.gif',
      subtitle: 'Vice Chairman'
    },
    {
      name: '****汽车有限公司',
      logo: '../assets/images/1231100.gif',
      subtitle: 'Vice Chairman'
    },
    {
      name: '****汽车有限公司',
      logo: '../assets/images/1231100.gif',
      subtitle: 'Vice President'
    },
    {
      name: '****汽车有限公司',
      logo: '../assets/images/1231100.gif',
      subtitle: 'Vice Chairman'
    },
  ];
  
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => (
  <ListItem bottomDivider>
      <Avatar source={require('../assets/images/1231100.gif')}/>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
  </ListItem>
  );

export class CompanyScreen extends Component {
    render() {
        return (
            <FlatList
            keyExtractor={keyExtractor}
            data={list}
            renderItem={renderItem}
          />
        )
    }
}

export default CompanyScreen
