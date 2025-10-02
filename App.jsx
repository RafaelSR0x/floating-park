import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import BottomBar from './src/assets/components/BottomBar.jsx';
import Cadastro from './src/screens/cadastro/index.jsx';
import Login from './src/screens/login/index.jsx';
import EditarUsuario from './src/screens/editar-usuario/index.jsx';
import Home from './src/screens/home/index.jsx';
import Entrada from './src/screens/entrada-veiculo/index.jsx';
import Saida from './src/screens/saida-veiculo/index.jsx';
import RegistroSaida from './src/screens/registro-saida/index.jsx';

const ContainerApp = styled.SafeAreaView`
    flex: 1;
`;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <BottomBar {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Entrada" component={Entrada} />
            <Tab.Screen name="Saida" component={Saida} />
        </Tab.Navigator>
    );
}

export default function App() {
    const [fontsLoaded] = useFonts({
        PoppinsRegular: require('./src/assets/fonts/Poppins-Regular.ttf'),
        PoppinsSemiBold: require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    });

    if (!fontsLoaded) return null;

    return (
        <>
            <StatusBar style="light" backgroundColor="#fff" />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="BottomTabs" component={BottomTabs} />
                    <Stack.Screen name="RegistroSaida" component={RegistroSaida} />
                    <Stack.Screen name="EditarUsuario" component={EditarUsuario} />
                    <Stack.Screen name="Cadastro" component={Cadastro} />
                    <Stack.Screen name="Sair" component={Login} />
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
