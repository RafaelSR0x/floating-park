import { LoginContainer, Image, Title, InputWrapper, StyledInput, ToggleButton, handleLogin } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import React, { useState } from 'react';
import PrimaryButton from '../../assets/components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigation = useNavigation();
    const [saida, setSaida] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home');
    };

    return (
        <LoginContainer>
            <Image source={require('../../assets/images/logo-floating-park.png')} style={{ width: 150, height: 134 }} />
            <Title>Acesse Sua Conta</Title>

            <InputWrapper>
                <Icon name="mail" size={20} color="#fff" />
                <StyledInput
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#fff"
                    value={email}
                    onChangeText={setEmail}
                />
            </InputWrapper>
            <InputWrapper>
                <Icon name="lock" size={20} color="#fff" />
                <StyledInput
                    placeholder="Digite sua senha"
                    secureTextEntry={!showPassword}
                    placeholderTextColor="#fff"
                    value={password}
                    onChangeText={setPassword}
                />
                <ToggleButton onPress={() => setShowPassword(!showPassword)}>
                    <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="#fff" />
                </ToggleButton>
            </InputWrapper>
            <PrimaryButton title="Login" onPress={handleLogin} />
        </LoginContainer>
    );
}
