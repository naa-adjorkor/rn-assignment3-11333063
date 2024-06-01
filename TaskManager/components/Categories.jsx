import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.categories}>
        <Text style={styles.exercise}>Exercise</Text>
        <Text style={styles.task}>12 Tasks</Text>
        <Image source={require('../assets/images/exercise.png')} style={styles.categoryImg} resizeMode='contain'/>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    top:50,
    left:20,
  },
  title:{
    fontSize:20,
    fontWeight:700,
  },
  categories:{
    top:15,
    width:186,
    height:195,
    backgroundColor:'#FBF9F7',
    borderRadius:15,
  },
  exercise:{
    fontSize:16,
    left:16,
    marginTop:10,
    fontWeight:700,
  },
  task:{
    marginTop:3,
    fontSize:12,
    left:16,
    fontWeight:400,
  },
  categoryImg:{
    height:140,
    top:5,
    right:130,
  },
})