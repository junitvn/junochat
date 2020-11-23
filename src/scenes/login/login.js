import {
  GoogleSignin,
} from '@react-native-community/google-signin';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonWithBackground from '_molecules/buttons/ButtonWithBackground';
import { Colors } from '_styles';
import styles from './login.styles';
import auth from '@react-native-firebase/auth';

const Login = (props) => {
  const { navigation } = props;
  console.log(navigation);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '889407671087-divotdb3e8vc4cdq2q3uu2jpmvec09vm.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    getCurrentUser();
  }, [loggedIn]);

  const getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    // console.log(currentUser.user);
    if (currentUser != null) {
      setUserInfo(currentUser.user);
      navigation.navigate("TabNavigation");
    }
    // console.log(userInfo, " - ", loggedIn);
  }

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
      await auth().signInWithCredential(credential).then(res => {
        console.log(res.additionalUserInfo.isNewUser);
        console.log(res.additionalUserInfo.profile);
        console.log('logged in ', res);
      });
    } catch (error) {
      console.log('err', error);
    }
  }

  const signOut = async () => {
    console.log("out");
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setLoggedIn(false);
      setUserInfo({});
      console.log("sign out");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LinearGradient
      colors={[Colors.FIRST_GRADIENT, Colors.SECOND_GRADIENT]}
      style={styles.gradientContainer}>
      {console.log(userInfo, loggedIn)}
      <Image source={require('_assets/images/logo.png')} style={styles.logo} />
      <ButtonWithBackground onClick={signIn} title={loggedIn ? `Hi, ${userInfo.name}` : "LOGIN WITH GOOGLE"} />
      <ButtonWithBackground onClick={signOut} title="Sign out" />
    </LinearGradient>
  );
}

export default Login;
