import React from 'react'
import { View, Text } from 'react-native'
import styles from './result-list.styles'
import { FlatList } from 'react-native-gesture-handler'
import Item from '../item/Item'

const ResultList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <Item item={item} />
        )}
      />
    </View>
  )
}

export default ResultList
