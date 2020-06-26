import React from 'react';
import Main from './components/MainComponent';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Main />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
  },
});
