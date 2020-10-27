import React from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonLoginWith from '_molecules/buttons/ButtonLoginWith';
import { Colors } from '_styles';

export default function Login() {
  return (
    <LinearGradient colors={[Colors.FIRST_GRADIENT, Colors.SECOND_GRADIENT]} style={{
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'space-between',
      paddingBottom:'10%',
      paddingTop:'30%'
    }}>
      <Image source={require('../assets/images/logo2.png')} style={{width: '70%', height:'15%'}} />
      <ButtonLoginWith />
    </LinearGradient>
  );
}
