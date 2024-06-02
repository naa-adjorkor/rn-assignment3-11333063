import { StyleSheet, View,Text,  FlatList, ScrollView } from 'react-native';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import Task from './components/Task';
import {Category} from './Data/Category';
import { tasks } from './Data/tasks';

export default function App() {
  return (
  <ScrollView>
    <View style={styles.container}>
     <Header/>
     <Search/>

    
     <Text style={styles.section}>Categories</Text>
     <FlatList 
        data={Category}
        renderItem={({item}) =>
          <Categories description={item.description} task={item.task} image={item.image}/>
        }
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
     />

     <Text style={styles.section}>Ongoing Tasks</Text>
      <FlatList 
        data={tasks}
        renderItem={({item}) =>
          <Task description={item.description}/>
        }
        keyExtractor={item => item.id}
     />
   
   </View>
   </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  
  },
  section:{
    top:50,
    left:20,
    fontSize:20,
    fontWeight:700,
    marginBottom:10,
  },
});
