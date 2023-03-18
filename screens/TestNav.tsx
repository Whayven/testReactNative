import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TestNav: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test Navigation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default TestNav;
