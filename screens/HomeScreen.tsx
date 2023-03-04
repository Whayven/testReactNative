import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const [counter, setCounter] = useState(0);
  const navigation = useNavigation();



  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  const multiplyCounter = () => {
    setCounter(counter * 2);
  }


  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={incrementCounter}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={multiplyCounter}>
          <Text>Multiply by 2</Text>
        </TouchableOpacity>
        <View>
          <Text>You clicked {counter} times</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Test')}}>
          <Text>Go to Test Navigation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderStyle: 'solid',
    borderColor: 'black',
  }
});

export default HomeScreen;
