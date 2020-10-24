import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ButtonLoginWith from '../components/molecules/buttons/ButtonLoginWith';

export default function Login() {
  return (
    <LinearGradient colors={['#fbc2eb', '#a18cd1']} style={{flex: 1}}>
      <ButtonLoginWith />
    </LinearGradient>
  );
}
