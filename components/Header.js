import React from 'react';
import {Text, View } from 'react-native';
import StyleSheet from '../style/style';

export default function Header() {
  return (
    <View style={StyleSheet.header}>
      <Text style={StyleSheet.title}>Battleship</Text>
    </View>
  )
}

