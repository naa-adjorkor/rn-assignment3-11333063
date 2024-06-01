import { StyleSheet, View,Text,  FlatList } from 'react-native';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import {Category} from './Data/Category'

export default function App() {
  return (
    <View style={styles.container}>
     <Header/>
     <Search/>


     <Text style={styles.title}>Categories</Text>
     <FlatList 
        data={Category}
        renderItem={({item}) =>
          <Categories description={item.description} task={item.task} image={item.image}/>
        }
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
     />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
  title:{
    top:50,
    left:20,
    fontSize:20,
    fontWeight:700,
  },
});
