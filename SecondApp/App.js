import React, {useState}from 'react';
import {
  SafeAreaView, 
  StyleSheet,
  TextInput, 
  View,
  Text,
  ScrollView,
  FlatList,
  Button,
  } from 'react-native';

  const App = () => {
    const[data , setData] = useState([]);

    const getMoviesFromApiAsync = async () => {
      try {
        const response = await fetch(
          'https://reactnative.dev/movies.json'
        );
        const json = await response.json();
        setData(json.movies);
      } catch (error) {
        console.error(error);
      }
    };

    return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="nick name" 
      />
      <View style = {styles.button}>
        <Button title={'sign in'} onPress={getMoviesFromApiAsync}/>
      </View>
      
      <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />

    </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7E600',
    },
    input: {
      padding: 20,
      borderBottomColor: '#bbb',
      borderBottomWidth: 1,
      fontSize: 24,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: '#fff',
      marginTop: 'auto',
    },
    button:{
      backgroundColor: '#3A1D1D',
      marginLeft:20,
      marginRight: 20,
      marginTop : 20,
      marginBottom : 'auto',
    },

  });

  export default App;

