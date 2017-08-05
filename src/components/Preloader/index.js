import React from 'react';
import { StyleSheet, Text } from 'react-native';

const s = StyleSheet.create({
  text: {
    textAlign: 'center',
    margin: 10
  }
});

export default () => {
  return (
    <Text style={s.text}>Loading...</Text>
  );
};
