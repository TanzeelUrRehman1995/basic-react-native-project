import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Tanzeel',
      data: ["Sketching", "Singer", "Programming"]
    },
    {
      id: '2',
      name: 'Shehroz',
      data: ["Acting", "Singing", "Excel"]
    },
    {
      id: 3,
      name: 'Hafsa',
      data: ["Designer", "Web Developer", "Desert maker"]
    }
  ];
  return (
    <View>
      <Text style={{ fontSize: 25, textAlign: 'center' }}> Section List in React Native </Text>
      <SectionList
        sections={users}
        renderItem={({ item }) => <Text style={style.item}>{item}</Text>}
        renderSectionHeader={({ section: { name } }) => <Text style={style.header}>{name}</Text>} />
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    fontSize: 30,
    color:'red'
  },
  item: {
    fontSize: 20,
    marginLeft:25
   
   }
});

export default App;
