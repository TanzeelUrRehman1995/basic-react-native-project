
import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';

const App = () => {
  let [name, setName] = useState("Tanzeel");
  return (
    <View>
      <Text style={{ fontSize: 25, textAlign: 'center' }}> Props In React JS </Text>
      <User name={name} age={28} />
      <Button title='Update Props' onPress={() => setName("Shehroz")} />
    </View>


  );
}

const User = (props) => {

  return (
    <View style={{ backgroundColor: 'green', padding: 5 }}>
      <Text style={{ fontSize: 20 }}>Name : {props.name}</Text>
      <Text style={{ fontSize: 20 }}>Age : {props.age}</Text>
    </View>
  );

}


  



export default App;
