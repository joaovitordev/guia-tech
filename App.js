import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import Homepage from './components/Homepage';
import BlueScreen from './components/BlueScreen';
import Bips from './components/Bips';
import Hardware from './components/Hardware';
import Software from './components/Software';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="BlueScreen" component={BlueScreen} />
      <Stack.Screen name="Bips" component={Bips} />
      <Stack.Screen name="Hardware" component={Hardware} />
      <Stack.Screen name="Software" component={Software} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </SafeAreaView>

  );

}

