import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './item.styles';

const Item = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.img_wrapper}>
        <Image style={styles.image} source={{ uri: item.image_url }} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.rating}>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  )
}

export default Item
