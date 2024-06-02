import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Task({description}) {
  return (
   
    <View style={styles.task}>
      <Text style={styles.taskText}>{description}</Text>
    </View>
    
 
  )
}


const styles = StyleSheet.create({
  task:{
    top:60,
    width:374,
    height:128,
    backgroundColor:'#FBF9F7',
    borderRadius:15,
    marginLeft:20,
    borderColor:'#E8D1BA',
    borderWidth:1,
    marginBottom:15,
  },
  taskText:{
    marginTop:45,
    fontSize:16,
    left:16,
    fontWeight:700,
  },
})