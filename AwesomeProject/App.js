import React , {useState} from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import CompanyData from './components/CompanyData';

const App = () => {

  // State

 const [name, setName] = useState("Tanzeel Ur Rehman");

 //State Function

 const UpdateName = () => {
  return (
    setName("Ahmed Siddiq")
  );
 };

  return (
    <View>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>Components </Text>
      <UserData/>
      <CompanyData/>
      <PressMe/>
      <Text style={{ fontSize: 25, textAlign: 'center' }}> Use State </Text>
      <Text style={{ fontSize: 15, textAlign: 'center' }}> {name}</Text> 
      <Button title='Press me to update name' onPress={UpdateName}/>
      
    </View>
  );
};


//Functions Section

const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 15, textAlign: 'center' }}> Name : Tanzeel Ur Rehman</Text>
      <Text style={{ fontSize: 15, textAlign: 'center' }}>Age : 28</Text>
      <Text style={{ fontSize: 15, textAlign: 'center' }}>Email : Tanzeelurrehman1995@gmail.com</Text>
    </View>
 );
};

const PressMe = () => {
  return(
    <View>
    <Button title = 'Press Me' onPress={ButtonOnPress}></Button>
  </View>
  );
};

const ButtonOnPress = () => {
  return (
   console.warn("Function Called") 
  );
};


export default App;