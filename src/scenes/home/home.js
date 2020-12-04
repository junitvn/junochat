import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BigHead } from 'react-native-bigheads';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header } from '_components';
import { Colors } from '_styles';

const Home = () => {
  return <View>
    <Header backgroundColor={Colors.SECOND_GRADIENT} barStyle='default' />
  </View>
}

export default Home;
