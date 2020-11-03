import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonLoginWith from '_molecules/buttons/ButtonLoginWith';
import { Colors } from '_styles';
import styles from './login.styles';
import auth from '@react-native-firebase/auth';

export default function Login() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '889407671087-divotdb3e8vc4cdq2q3uu2jpmvec09vm.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  const signIn = async () => {
    console.log('log in');
    try {
      await GoogleSignin.hasPlayServices();
      const { accessToken, idToken } = await GoogleSignin.signIn();
      setLoggedIn(true);
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);
    } catch (error) {
      console.log('err', error);
    }
  }

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setLoggedIn(false);
      setUserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LinearGradient
      colors={[Colors.FIRST_GRADIENT, Colors.SECOND_GRADIENT]}
      style={styles.gradientContainer}>
      <Image source={require('_assets/images/logo.png')} style={styles.logo} />
      <ButtonLoginWith onClick={signIn} />
    </LinearGradient>
  );
}
