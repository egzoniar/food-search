import React, { useState } from 'react'
import { View, TextInput, Alert } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

import styles from './search-bar.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SearchBar = ({ text, onTextChange, onSubmit, setText }) => {
  const [color, setColor] = useState('black');
  const [backgroundColor, setBcgColor] = useState('#f0eeee');
  const [elevation, setElevation] = useState(0);

  const focus = () => {
    setColor('#DB3F23');
    setBcgColor('#fff');
    setElevation(5);
  }
  const unfocus = () => {
    setColor('black');
    setBcgColor('#f0eeee');
    setElevation(0);
  }

  return (
    <View style={{ ...styles.container, elevation, backgroundColor }}>
      <Feather name="search" style={{ ...styles.searchIcon, color }} />
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

      {(text === '') ? null : (
        <TouchableOpacity
          style={styles.closeTouchable}
          onPress={() => setText('')}>
          <AntDesign name="close" style={styles.closeIcon} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default SearchBar;
