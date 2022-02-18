import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Input({ title, placeHolder, ...rest }) {
  return (
    <View style={styled.ContainerInput}>
      <Text style={styled.TitleInput}>{title}</Text>
      <TextInput
        keyboardAppearance="dark"
        keyboardType='numeric'
        placeholder={placeHolder}
        contextMenuHidden
        placeholderTextColor="#7c9eb2"
        style={styled.Input}
        {...rest}
        />
    </View>
  );
}

const styled = StyleSheet.create({
  ContainerInput : {
    width: '95%',
    padding: '2%',
    marginLeft: 6,
  },
  TitleInput : {
    fontSize: 14,
    marginBottom: 6,
  },
  Input : {
    height: 40,
    padding: 6,
    fontSize: 14,
    borderRadius: 4,
    backgroundColor: '#f5f5f5'
  },
});