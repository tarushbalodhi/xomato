import { View, Text } from 'react-native'
import React from 'react'
import TabNavigator from './src/navigation/TabNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App