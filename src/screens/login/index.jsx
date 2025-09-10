import { LoginContainer, LoginImage,Title } from './styles';
import { useFonts } from 'expo-font';

  

export default function Login() {
    return (
        <LoginContainer>
            <LoginImage
                source={require('../../assets/images/logo-floating-park.png')}
                style={{ width: 150, height: 134 }}
            />
            <Title>Acesse Sua Conta</Title>
        </LoginContainer>
    );
}
