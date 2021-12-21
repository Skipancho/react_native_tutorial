import React from 'react';
import {
  SafeAreaView, 
  StyleSheet,
  TextInput, 
  View,
  Text,
  ScrollView,
  Button,
  } from 'react-native';

  const App = () => {
    return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="nick name" 
      />
      <View style = {styles.button}>
        <Button title={'sign in'}/>
      </View>
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

