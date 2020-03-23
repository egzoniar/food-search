import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchBar from '../../component/search-bar/SearchBar';
import useResults from '../../hooks/useResults';
import ResultList from '../../component/result-list/ResultList';

const SearchScreen = () => {
  const [text, setText] = useState('');
  const [searchApi, results, errMsg] = useResults();

  const filterResultByPrice = price => {
    return results.filter(
      result => result.price === price
    )
  }

  const filterResultComponent = (component, price) => {
    const res = filterResultByPrice(price);
    if (res.length === 0) return null;

    return component;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SearchBar
          text={text} onTextChange={setText}
          onSubmit={() => searchApi(text)}
          setText={setText} />
        {errMsg ? <Text>{errMsg}</Text> : null}
        <Text></Text>

        {filterResultComponent(
          <ResultList title="Cost Effective" results={filterResultByPrice('$')} />,
          '$'
        )}

        {filterResultComponent(
          <ResultList title="Bit Pricier" results={filterResultByPrice('$$')} />,
          '$$'
        )}

        {filterResultComponent(
          <ResultList title="Big Spender" results={filterResultByPrice('$$$')} />,
          '$$$'
        )}
      </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});

export default SearchScreen;
