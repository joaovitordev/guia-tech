import React from 'react';
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';

import {
  Container,
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

        <BackButton>
          <TouchableOpacity  onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={30} color="#FFF" />
          </TouchableOpacity>
        </BackButton>
         
        <HeaderTitle>Bips</HeaderTitle>
        
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
