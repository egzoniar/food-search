import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from "../screens/search/SearchScreen";
import SingleItem from "../screens/single-item/SingleItem";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const options = { headerShown: false }


  return (
    <Stack.Navigator
      screenOptions={options}>
      <Stack.Screen name='Business Search' component={SearchScreen} />
      <Stack.Screen name='Single Item' component={SingleItem} />
    </Stack.Navigator>
  )
}

export default StackNavigator;