import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

export default function Categories({description,task,image}) {
  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        <Text style={styles.exercise}>{description}</Text>
        <Text style={styles.task}>{task}</Text>
        <Image source={image} style={styles.categoryImg} resizeMode='contain'/>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    top:50,
    left:20,
  },
  categories:{
    top:15,
    width:186,
    height:195,
    backgroundColor:'#FBF9F7',
    borderRadius:15,
    marginRight:20,
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