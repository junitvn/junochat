import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Typos, Colors } from '_styles';

export default function ButtonWithBackground(props) {
  return (
    <TouchableOpacity
      onPress={() => {props.onClick()}}
      style={styles.container}>
      <Text style={{ fontSize: Typos.FONT_SIZE_16, color: Colors.GRAY_DARK }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 43,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  }
})
