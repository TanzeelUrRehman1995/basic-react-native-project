import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
import Student from './components/student';

class App extends Component {
fruit = ()=> {
  console.warn("Apple");
}

  render(){
    return(
      <View>
        <Text style={{fontSize:30, textAlign:'center'}}> Class Component </Text>
        <TextInput placeholder='Enter your name'/>
        <Button title='Press Me' onPress={this.fruit}/> 
        <Student />
      </View>
    )
  }
}

export default App;
