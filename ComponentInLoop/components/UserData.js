import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  

export default UserData = (props) => {
    const item=props.item;
    return (<View style={styles.box}>
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.item}>{item.email}</Text>
          </View>)
  }
  
  const styles=StyleSheet.create({
    item:{
      fontSize:20,
      flex:1,
      color:'red',
      borderColor:'yellow',
      borderWidth:2,
      margin:2,
      textAlign:'center'
    },
    box:{
      flexDirection:'row',
      
  
    }
  })
  