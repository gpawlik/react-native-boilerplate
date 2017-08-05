import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const s = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 2,
    backgroundColor: '#fff',
    marginBottom: 5
  },
  title: {
    fontWeight: '600',
    color: '#222',
    marginRight: 5
  },
  label: {
    color: '#999'
  }
});

export default ({ data }) => {
  return (
    <View style={s.card}>
      <Text style={s.title}>{data.nm}</Text>
      <Text style={s.label}>{data.pp}</Text>
    </View>
  );
};
