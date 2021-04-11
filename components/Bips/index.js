import React from 'react';
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';

import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  ErrorListCard,
  ErrorListCardTitle, 
  ErrorListCardSolution,
} from './styles';

import erros from '../../api/bips.json';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Bips({navigation}) {

  return (
    <ScrollView>
      <StatusBar backgroundColor="#121212" barStyle="light-content" />
      <Container>

        <Header>
          <TouchableOpacity style={{ display: 'contents' }} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={30} color="#FFF" />
          </TouchableOpacity>
          <HeaderTitle>Erros de tela azul</HeaderTitle>
        </Header>
        
        {erros.map(erro => (
          <ErrorListCard key={erro.id}>
            <ErrorListCardTitle> {erro.title} </ErrorListCardTitle>
            <ErrorListCardSolution> {erro.solution} </ErrorListCardSolution>
          </ErrorListCard>
        ))}
      </Container>
    </ScrollView>
  );
}
