import { StyleSheet,View } from 'react-native';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';

export default function App() {
  return (
    <View style={styles.container}>
     <Header/>
     <Search/>
     <Categories/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
});
