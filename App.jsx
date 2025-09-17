import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import Cadastro from './src/screens/cadastro/index.jsx';
import Login from './src/screens/login/index.jsx';
import EditarUsuario from './src/screens/editar-usuario/index.jsx';

const ContainerApp = styled.SafeAreaView`
    flex: 1;
`;

export default function App() {
    const [fontsLoaded] = useFonts({
        PoppinsRegular: require('./src/assets/fonts/Poppins-Regular.ttf'),
        PoppinsSemiBold: require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Ou um componente de loading
    }

    return (
        <ContainerApp>
            <StatusBar style="light" backgroundColor="rgba(255, 255, 255, 0.5)" translucent />
            <EditarUsuario />
        </ContainerApp>
    );
}
