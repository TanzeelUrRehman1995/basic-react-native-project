import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';

class Student extends Component {
fruit = ()=> {
  console.warn("Apple");
}
  render(){
    return(
      <View>
        <Text style={{fontSize:30, textAlign:'center', color:'red'}}> Student Component </Text>
      </View>
    )
  }
}

export default Student;
