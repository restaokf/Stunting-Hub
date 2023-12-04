import React from 'react'
import StackNavigation from './navigation/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'

const Main = () => {
  return (
    <NavigationContainer>
        <StackNavigation/>
    </NavigationContainer>
  )
}

export default Main
