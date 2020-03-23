import React from 'react'
import { View, Text } from 'react-native'
import styles from './result-list.styles'
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Item from '../item/Item';

const ResultList = ({ title, results }) => {
  const navigation = useNavigation();

  if (!results.length) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Single Item', { id: item.id })}
          >
            <Item item={item} />
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  )
}

export default ResultList;
