import React from 'react';

import { ScrollView, StatusBar } from 'react-native';

import Homepage from './components/Homepage';

export default function App() {
  return (
    <ScrollView>
      <StatusBar backgroundColor="#121212" barStyle="light-content" />
      <Homepage />
    </ScrollView>
  );
}