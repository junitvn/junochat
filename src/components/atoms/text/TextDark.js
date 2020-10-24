import React from 'react';
import {View, Text} from 'react-native';

export default function TextDark({text, size}) {
  return <Text style={{fontSize: size, color: '#868f96'}}>{text}</Text>;
}
