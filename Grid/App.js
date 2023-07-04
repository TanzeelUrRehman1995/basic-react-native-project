import React from 'react';
import {
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
      name: 'Shehroz'
    },
    {
      id: 3,
      name: 'Siddiq'
    },
    {
      id: 4,
      name: "Hafsa"
    },
    {
      id: 5,
      name: "Huda",
    },
    {
      id: 6,
      name: "Ahmed"
    },
    {
      id: 7,
      name: "Kulsoom"
    },
    {
      id: 8,
      name: "Dadi Ammi",
    },
    {
      id: 9,
      name: "Bisma"
    },
    {
      id: 1,
      name: 'Tanzeel'
    },
    {
      id: 2,
      name: 'Shehroz'
    },
    {
      id: 3,
      name: 'Siddiq'
    },
    {
      id: 4,
      name: "Hafsa"
    },
    {
      id: 5,
      name: "Huda",
    },
    {
      id: 6,
      name: "Ahmed"
    },
    {
      id: 7,
      name: "Kulsoom"
    },
    {
      id: 8,
      name: "Dadi Ammi",
    },
    {
      id: 9,
      name: "Bisma"
    },
    {
      id: 1,
      name: 'Tanzeel'
    },
    {
      id: 2,
      name: 'Shehroz'
    },
    {
      id: 3,
      name: 'Siddiq'
    },
    {
      id: 4,
      name: "Hafsa"
    },
    {
      id: 5,
      name: "Huda",
    },
    {
      id: 6,
      name: "Ahmed"
    },
    {
      id: 7,
      name: "Kulsoom"
    },
    {
      id: 8,
      name: "Dadi Ammi",
    },
    {
      id: 9,
      name: "Bisma"
    }
  ];
  
  return (
    <View>
      <Text style={{ fontSize: 25, textAlign: 'center' }}> Grid with Dynamic Data</Text>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            users.map((item) => <Text style={styles.item}>{item.name}</Text>)
          }
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    backgroundColor: 'skyblue',
    color: 'red',
    height: 120,
    width: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
    margin: 6,
    padding: 2
  }
})


export default App;
