import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const Container = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    background-color: #323232;
    border-top-width: 1px;
    border-top-color: #333;
    padding-top: 5px;
    height: 90px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
`;

const TabButton = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Label = styled.Text`
    font-size: 14px;
    font-family: PoppinsSemiBold;
    color: ${(props) => (props.active ? '#fff' : '#aaa')};
    margin-top: 3px;
`;

export default function BottomBar({ activeTab, onTabPress }) {
    return (
        <Container>
            <TabButton onPress={() => onTabPress('inicio')}>
                <Ionicons name="home" size={28} color={activeTab === 'inicio' ? '#fff' : '#aaa'} />
                <Label active={activeTab === 'inicio'}>Início</Label>
            </TabButton>

            <TabButton onPress={() => onTabPress('entrada')}>
                <Ionicons name="car" size={28} color={activeTab === 'entrada' ? '#fff' : '#aaa'} />
                <Label active={activeTab === 'entrada'}>Entrada</Label>
            </TabButton>

            <TabButton onPress={() => onTabPress('saida')}>
                <Ionicons name="exit-outline" size={28} color={activeTab === 'saida' ? '#fff' : '#aaa'} />
                <Label active={activeTab === 'saida'}>Saída</Label>
            </TabButton>
        </Container>
    );
}
