import React from 'react';
import styled from 'styled-components/native';
import Header from '../../assets/components/Header';
import { View, Text, ScrollView } from 'react-native';
import { Container, Card, InfoText, InfoTitleText } from './styles';
import PrimaryButton from '../../assets/components/PrimaryButton';



export default function RegistroSaida({ route, navigation }) {
    const { placa } = route.params || {};

    return (
        <Container>
            {/* Usando Header com título customizado */}
            <Header title="Registro de saída" />

            <Card>
                <InfoTitleText>Registro de saída</InfoTitleText>
                <InfoText>Placa: {placa || 'N/A'}</InfoText>
                <InfoText>Data de entrada: 30/08/2025</InfoText>
                <InfoText>Horário de entrada: 09:13:00</InfoText>
                <InfoText>Data de saída: 31/08/2025</InfoText>
                <InfoText>Horário de saída: 09:16:00</InfoText>
                <InfoText>Tempo de permanência: 1440 minutos</InfoText>
                <InfoText>Valor da hora: R$ 25,00</InfoText>
                <InfoText>Valor a pagar: R$ 600,00</InfoText>
            </Card>

            <PrimaryButton title="Finalizar" onPress={() => navigation.goBack()} />
        </Container>
    );
}
