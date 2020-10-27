import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '_styles';

export default function TextDark({text, size}) {
  console.log(Colors.PRIMARY);
  return <Text style={{fontSize: size, color: '#808080'}}>{text}</Text>;
}
