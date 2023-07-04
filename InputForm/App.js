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
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(false);

  const resetForm = () => {
    setDisplay(false);
    setName('');
    setPassword('');
    setEmail('');
  }
  return (
    <View>
      <Text style={{ fontSize: 25, textAlign: 'center' }}> Form In React Native </Text>
      <TextInput style={styles.textInput}
        placeholder='Enter your name'
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput style={styles.textInput}
        placeholder='Enter Password'
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <TextInput style={styles.textInput}
        placeholder='Enter Email'
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <View style={{ marginBottom: 2 }}>
        <Button title='Show Details' onPress={() => setDisplay(true)} />
      </View>
      <Button title='Clear Details' onPress={() => setDisplay(resetForm)} />
      <View>
        {
          display ?
            <View>
              <Text style={{ fontSize: 20 }}>Name : {name} </Text>
              <Text style={{ fontSize: 20 }}>Password : {password} </Text>
              <Text style={{ fontSize: 20 }}>Email : {email}</Text>
            </View> : null
        }
      </View>

    </View>

  )
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
    margin: 3
  }
});
export default App;
