

import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  const users = [
    {
      id: 1,
      name: 'Tanzeel'
    },
    {
      id: 2,
      name: 'Bilal'
    },
    {
      id: 3,
      name: 'Owais'
    },
    {
      id: 12,
      name: 'Shehroz'
    },
    {
      id: 42,
     name: 'Bisma'
    },
    {
      id: 43,
      name: 'Huda'
    },
    {
      id: 132,
      name: 'nida'
    },
    {
      id: 412,
     name: 'fabiha'
    },
    {
      id: 343,
      name: 'ahmed'
    },
  ]

  return (
    <View><ScrollView>
      <Text style={{ fontSize: 25, textAlign: 'center' }}> List Created by Using FlatList Component</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>} />

      <Text style={{ fontSize: 25, textAlign: 'center' }}> List Created by Using Map function </Text>
      
       
        {
          users.map((array) => <Text style={styles.item}>{array.name}</Text>)
        }
       
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    padding: 10,
    color: '#000fff',
    backgroundColor: 'skyblue',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 4

  }
})

export default App;
