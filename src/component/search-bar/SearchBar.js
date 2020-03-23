import React, { useState } from 'react'
import { View, TextInput, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './search-bar.styles';


const SearchBar = ({ text, onTextChange, onSubmit }) => {
  const [color, setColor] = useState('black');
  const [backgroundColor, setBcgColor] = useState('#f0eeee');
  const [elevation, setElevation] = useState(0);

  const focus = () => {
    setColor('#DB3F23');
    setBcgColor('#fff');
    setElevation(9);
  }
  const unfocus = () => {
    setColor('black');
    setBcgColor('#f0eeee');
    setElevation(0);
  }

  return (
    <View style={{ ...styles.container, elevation, backgroundColor }}>
      <Feather name="search" style={{ ...styles.icon, color }} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => focus()}
        onBlur={() => unfocus()}
        style={{ ...styles.input, color }}
        value={text}
        onChangeText={onTextChange}
        onEndEditing={onSubmit}
        placeholder="Search" />
    </View>
  )
}

export default SearchBar;
