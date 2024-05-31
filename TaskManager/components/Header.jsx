import { View, Text , StyleSheet,Image} from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.Header}>
      <View>
        <Text style={styles.title}>Hello , Devs</Text>
        <Text style={styles.subTitle}>14 tasks today</Text>
      </View>
      <Image source={require('../assets/images/profileImage.png')} style={styles.user}/>
    </View>
  )
};


const styles = StyleSheet.create({
  Header: {
    flexDirection:'row',
    top:52,
   // left:20,
    padding:20,
    justifyContent:'space-between',
  },
  title:{
    fontSize:32,
    fontWeight:700,
  },
  subTitle:{
    fontSize:12,
  },
  user:{
    width:46,
    height:45,
    borderRadius:50,
    backgroundColor:'#ffffff'
  },
})