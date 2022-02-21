import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';
import FirstJ from './screens/FirstJ';
import SecJ from './screens/SecJ';
import ThirdJ from './screens/ThirdJ';
import FouthJ from './screens/FouthJ';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="FirstJ" component={FirstJ}/>
        <Stack.Screen name="SecJ" component={SecJ}/>
        <Stack.Screen name="ThirdJ" component={ThirdJ}/>
        <Stack.Screen name="FouthJ" component={FouthJ}/>
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator