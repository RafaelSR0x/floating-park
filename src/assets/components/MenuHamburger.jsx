import React, { useEffect, useRef, useState } from 'react';
import { Modal, Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const OverlayTouchable = styled.TouchableOpacity`
    flex: 1;
    justify-content: flex-start;
    align-items: flex-end;
`;

const MenuContainer = styled(Animated.View)`
    width: 75%;
    height: 100%;
    background-color: #5626c4;
    padding: 20px 30px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;

const HeaderRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;
`;

const LogoImage = styled.Image``;

const CloseButton = styled.TouchableOpacity``;

const MenuItem = styled.TouchableOpacity`
    padding: 15px 0;
    border-bottom-width: 1px;
    border-bottom-color: rgba(255, 255, 255, 0.8);
`;

const MenuText = styled.Text`
    font-family: PoppinsSemiBold;
    font-size: 16px;
    color: #fff;
`;

export default function MenuHamburger({ visible, onClose }) {
    const [showModal, setShowModal] = useState(visible);

    const slideAnim = useRef(new Animated.Value(width)).current; // começa fora da tela
    const fadeAnim = useRef(new Animated.Value(0)).current; // opacidade do overlay

    useEffect(() => {
        if (visible) {
            setShowModal(true);
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: width,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                setShowModal(false); // só fecha o modal após animação
            });
        }
    }, [visible]);

    if (!showModal) return null;

    return (
        <Modal visible transparent animationType="none" onRequestClose={onClose}>
            <Animated.View
                style={{
                    flex: 1,
                    marginTop:6,
                    backgroundColor: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.4)'],
                    }),
                }}
            >
                <OverlayTouchable activeOpacity={1} onPress={onClose}>
                    <MenuContainer style={{ transform: [{ translateX: slideAnim }] }}>
                        <HeaderRow>
                            <LogoImage
                                source={require('../../assets/images/logo-menu.png')}
                                style={{ width: 131, height: 38 }}
                            />
                            <CloseButton onPress={onClose}>
                                <Ionicons name="close" size={32} color="#fff" />
                            </CloseButton>
                        </HeaderRow>

                        <MenuItem onPress={() => console.log('Editar perfil')}>
                            <MenuText>Editar perfil</MenuText>
                        </MenuItem>

                        <MenuItem onPress={() => console.log('Cadastrar usuário')}>
                            <MenuText>Cadastrar usuário</MenuText>
                        </MenuItem>

                        <MenuItem onPress={() => console.log('Sair')}>
                            <MenuText>Sair</MenuText>
                        </MenuItem>
                    </MenuContainer>
                </OverlayTouchable>
            </Animated.View>
        </Modal>
    );
}
