import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Typos, Colors } from '_styles';

export default function ButtonLoginWith() {
  return (
    <TouchableOpacity
      style={styles.container}>
      <Text style={{ fontSize: Typos.FONT_SIZE_16, color: Colors.GRAY_DARK }}>
        LOGIN WITH GOOGLE
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
