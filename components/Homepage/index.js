import React from 'react';

import {
  Container, Title, Card,  CardTitle, CardSubtitle, CardImage
} from './styles';

import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';

import blueScreeen from '../../assets/blue-screen.png';
import bip from '../../assets/bell.png';
import hardware from '../../assets/cpu.png';
import software from '../../assets/content.png';

export default function Homepage({navigation}) {

  return (
    <ScrollView>
    <StatusBar backgroundColor="#121212" barStyle="light-content" />
    <Container>
      <Title>Guia Tech</Title>

      <TouchableOpacity style={{ display: 'contents' }} onPress={() => navigation.navigate('BlueScreen')}>
        <Card>
          <CardImage source={blueScreeen} />
          <CardTitle>
            Tela Azul da morte
          </CardTitle>
          <CardSubtitle>
            Descubra o que cada erro de tela azul significa.
          </CardSubtitle>
        </Card>
      </TouchableOpacity>

      <Card>
        <CardImage source={bip} />
        <CardTitle>
          Bips
        </CardTitle>
        <CardSubtitle>
          Descubra o que os bips querem dizer.
        </CardSubtitle>
      </Card>

      <Card>
        <CardImage source={hardware} />
        <CardTitle>
          Erros de hardware
        </CardTitle>
        <CardSubtitle>
          Problemas comuns de hardware.
        </CardSubtitle>
      </Card>

      <Card>
        <CardImage source={software} />
        <CardTitle>
          Erros de software
        </CardTitle>
        <CardSubtitle>
          Erros comuns de software.
        </CardSubtitle>
      </Card>

    </Container>
    </ScrollView>
  );
}
