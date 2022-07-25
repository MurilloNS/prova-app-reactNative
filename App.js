import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Title from './src/Title/';
import ImgHomepage from './src/ImgHomepage';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title/>
      <ImgHomepage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
