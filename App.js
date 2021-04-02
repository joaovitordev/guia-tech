import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Homepage from './components/Homepage';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Homepage />
    </>
  );
}


