import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';



const App = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={{ fontSize: 25, textAlign: 'center' }}> Taking Text Input </Text>
      <Text style={{ fontSize: 25, textAlign: 'center' }}> My name is : {name} </Text>
      <TextInput
        style={styles.textInput}
        value={name}
        placeholder='Enter Your Name '
        onChangeText={(text)=>setName(text)}
      />
      <Button title='Clear Input Value Or Text' onPress={()=>setName('')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 15,
    margin: 5
  }

})


export default App;
