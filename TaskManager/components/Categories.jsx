import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

export default function Categories({description,task,image}) {
  return (
 
      <View style={styles.categories}>
        <Text style={styles.exercise}>{description}</Text>
        <Text style={styles.task}>{task}</Text>
        <Image source={image} style={styles.categoryImg} resizeMode='contain'/>
      </View>
      
   
  )
}

const styles = StyleSheet.create({
  categories:{
    width:186,
    height:195,
    backgroundColor:'#FBF9F7',
    borderRadius:15,
    marginLeft:20,
    paddingLeft:10,
    paddingRight:10,
    marginTop:50,
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
    marginRight:10,
  },
})