import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from "../screens/search/SearchScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const options = { headerShown: false }


  return (
    <Stack.Navigator
      screenOptions={options}
    >
      <Stack.Screen name='Business Search' component={SearchScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator;