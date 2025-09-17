import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import Login from './src/screens/login/index.jsx';
import { useFonts } from 'expo-font';
import Cadastro from './src/screens/cadastro/index.jsx';

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
            <Cadastro/>
        </ContainerApp>
    );
}
