import React from 'react';

import {
  Container, Title, Card,  CardTitle, CardSubtitle, CardImage, Button
} from './styles';

import blueScreeen from '../../assets/blue-screen.png';
import bip from '../../assets/bell.png';
import hardware from '../../assets/cpu.png';
import software from '../../assets/content.png';

export default function Homepage({navigation}) {
  return (
    <Container>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </Container>
  );
}
