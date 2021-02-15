import React from 'react';
import { View } from 'react-native';
import StyleSheet from './style/style';
import Header from './components/Header';
import Footer from './components/Footer';
import Gameboard from './components/Gameboard';


export default function App() {
  return (
    <View style={StyleSheet.container}>
      <Header />
      <Gameboard />
      <Footer />
    </View>
  );
}
