import React from 'react';
import {Text, View } from 'react-native';
import StyleSheet from '../style/style';

export default function Footer() {
  return (
    <View style={StyleSheet.footer}>
      <Text style={StyleSheet.author}>Author: Antti Lämsä</Text>
    </View>
  )
}

