import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextDark from '../../atoms/text/TextDark';

export default function ButtonLoginWith() {
  return (
    <TouchableOpacity
      style={{
        width: '80%',
        height: 45,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
      }}>
      <TextDark text="LOGIN WITH FACEBOOK" size={20} />
    </TouchableOpacity>
  );
}
