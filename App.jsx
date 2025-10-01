import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import BottomBar from './src/assets/components/BottomBar.jsx';
import Cadastro from './src/screens/cadastro/index.jsx';
import Login from './src/screens/login/index.jsx';
import EditarUsuario from './src/screens/editar-usuario/index.jsx';
import Home from './src/screens/home/index.jsx';
import Entrada from './src/screens/entrada-veiculo/index.jsx';
import Saida from './src/screens/saida-veiculo/index.jsx';

const ContainerApp = styled.SafeAreaView`
    flex: 1;
`;

const Tab = createBottomTabNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        PoppinsRegular: require('./src/assets/fonts/Poppins-Regular.ttf'),
        PoppinsSemiBold: require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Ou um componente de loading
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                tabBar={(props) => <BottomBar {...props} />}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Entrada" component={Entrada} />
                <Tab.Screen name="Saida" component={Saida} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
