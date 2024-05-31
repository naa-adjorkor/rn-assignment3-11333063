import React from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

export default function Search() {
  return (
    <View>
    <View style={styles.searchBox}>
      <Image style={styles.searchIcon} source={require('../assets/images/searchIcon.png')}/>
      <TextInput style={styles.search} placeholder='Search' placeholderTextColor={'black'}/>
     </View>
       <TouchableOpacity style={styles.menuBox}>
        <Image style={styles.menu} source={require('../assets/images/menu.png')}/>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  searchBox:{
    flexDirection:'row',
    top:65,
    width:285,
    height:48,
    left:20,
    border:1,
    backgroundColor:'#FBF9F7',
    borderRadius:10,
    overflow:'hidden',
  },
  searchIcon:{
    width:24,
    height:24,
    left:15,
    top:12,
  },
  search:{
    fontSize:16,
    fontWeight:700,
    left:25,
  },
  menuBox:{
  backgroundColor:'#F0522F',
    width:50,
    height:48,
    borderRadius:14,
    left:340,
    top:18,
  },
  menu:{
    width:34,
    height:34,
    left:8,
    top:6,
  },
})