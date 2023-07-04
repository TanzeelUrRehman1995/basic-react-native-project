

import React from 'react';
import UserData from './components/UserData';
import {
  FlatList,
  Text,
  View,
} from 'react-native';


const App = () => {

  const users = [
    {
      id:1,
      name:'Tanzeel',
      email:'Test@gmail.com'
    },
    {
      id:2,
      name:'Ahmed',
      email:'ahmed@gmail.com'
    },
    {
      id:3,
      name:'Rehman',
      email:'rehman1995@gmail.com'
    }
  ]
  return (
    <View> 
      <Text style= {{fontSize:25, textAlign:'center'}}> Component In Loop</Text>
      <FlatList
      data={users}
      renderItem= {({item})=> <UserData item={item} /> }
      /> 
    </View>
  );
}


export default App;
