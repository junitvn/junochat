import React from 'react';
import {TouchableOpacity} from 'react-native';
import TextDark from '_atoms/text/TextDark';

export default function ButtonLoginWith() {
  return (
    <TouchableOpacity
      style={{
        width: '80%',
        height: 45,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
      }}>
      <TextDark text="LOGIN WITH FACEBOOK" size={17} />
    </TouchableOpacity>
  );
}
