import React, { useState, useEffect } from 'react'
import { Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import yelp from '../../api/yelp';
import { FlatList } from 'react-native-gesture-handler';
import styles from './single-item.styles';

const SingleItem = ({ route }) => {
  const [result, setResult] = useState(null);
  const item_id = route.params.id;

  console.log(result);

  const getItemDetails = async () => {
    const response = await yelp.get(`/${item_id}`);
    setResult(response.data);
  }

  //if (!result) return null;

  useEffect(() => {
    getItemDetails();
  }, []);

  return (
    (!result) ? null : (
      <SafeAreaView>
        <Text>Single Item | name: {result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => (
            <Image style={styles.image} source={{ uri: item }} />
          )}
        />
      </SafeAreaView>
    )
  )
}

export default SingleItem;