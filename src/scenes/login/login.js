import React from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonLoginWith from '_molecules/buttons/ButtonLoginWith';
import { Colors } from '_styles';
import styles from './login.styles';

export default function Login() {
  return (
    <LinearGradient
      colors={[Colors.FIRST_GRADIENT, Colors.SECOND_GRADIENT]}
      style={styles.gradientContainer}>
      <Image source={require('_assets/images/logo.png')} style={styles.logo} />
      <ButtonLoginWith />
    </LinearGradient>
  );
}
