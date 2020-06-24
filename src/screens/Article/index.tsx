import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

export default function Article() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Article</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c42f33',
  },
  text: {
    color: '#fff',
  },
});
