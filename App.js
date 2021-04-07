import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Homepage from './components/Homepage';
import BlueScreen from './components/BlueScreen';
import Bips from './components/Bips';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="BlueScreen" component={BlueScreen} />
      <Stack.Screen name="Bips" component={Bips} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}