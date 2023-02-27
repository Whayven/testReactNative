/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TextInput, TouchableOpacity,
  useColorScheme,
  View
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [counter, setCounter]  = useState(0);
  const [inputString, setInputString] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={incrementCounter}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>You clicked {counter} times</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>Text Input: </Text>
        </View>
        <TextInput style={styles.input} placeholder={'Enter Text Here'} onChangeText={(val) => setInputString(val)} defaultValue={inputString} />
        {inputString.length > 0 && <Text>{inputString}</Text>}
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

export default App;
