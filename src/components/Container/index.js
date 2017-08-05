import React from 'react';
import { StyleSheet, View } from 'react-native';

const s = StyleSheet.create({
  container: {
    padding: 10
  }
});

export default ({ children }) => {
  return (
    <View style={s.container}>
      {children}
    </View>
  );
};
