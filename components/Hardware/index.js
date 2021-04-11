import React from 'react';
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';

import {
    Container,
    HeaderTitle,
    IconText,
    ErrorListCard,
    ErrorListCardSolution,
    ErrorListCardAdditionalInformation,
    ErrorListCardErro,
    ErrorListCardExplication
} from './styles';

import erros from '../../api/hardware.json';

import Icon from 'react-native-vector-icons/MaterialIcons';

import error from '../../assets/error.png';
import information from '../../assets/information.png';
import solution from '../../assets/solution.png';
import explication from '../../assets/explication.png';

export default function Hardware({navigation}) {

  return (
    <ScrollView>
      <StatusBar backgroundColor="#121212" barStyle="light-content" />
        <Container>
            <TouchableOpacity style={{ display: 'contents' }} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={30} color="#FFF" />
            </TouchableOpacity>
            <HeaderTitle>Erros de Hardware</HeaderTitle>

            {erros.map(erro => (
                <ErrorListCard key={erro.id}>
                    <ErrorListCardErro>
                        <IconText source={erro.erro ? error : ''} />
                        { erro.erro }
                    </ErrorListCardErro>

                    <ErrorListCardAdditionalInformation>
                        <IconText source={erro.additionalInformation ? information : ''} />
                        { erro.additionalInformation }
                    </ErrorListCardAdditionalInformation>

                    <ErrorListCardSolution>
                        <IconText source={erro.solution ? solution : ''} />
                        { erro.solution }
                    </ErrorListCardSolution>
                    <ErrorListCardExplication>
                        <IconText source={erro.explication ? explication : ''} />
                        { erro.explication }
                    </ErrorListCardExplication>
                </ErrorListCard>
            ))}
        </Container>
    </ScrollView>
  );
}