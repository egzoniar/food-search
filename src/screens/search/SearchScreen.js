import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';

import SearchBar from '../../component/search-bar/SearchBar';

const SearchScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar
        text={text} onTextChange={newText => setText(newText)}
        onSubmit={() => console.log("Text was submitted!")}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});

export default SearchScreen;
