import Card from "../../assets/components/Card.jsx";
import Header from "../../assets/components/Header.jsx";
import { BottomNavBar, ContainerCards, HeaderHome, HomeContainer, LogoHeader, TitleHeader } from "./styles";

export default function Home() {
    return (
        <HomeContainer>
            {/* <HeaderHome>
                <LogoHeader
                    source={require('../../assets/images/logo-header.png')}
                    style={{ width: 102, height: 33 }}
                />
                <TitleHeader>Veículos</TitleHeader>
                <LogoHeader source={require('../../assets/images/logo-header.png')} style={{ width: 44, height: 39 }} />
            </HeaderHome> */}
            <Header />
            <ContainerCards
                contentContainerStyle={{
                    alignItems: 'center',
                    gap: 15, // aqui funciona (RN >= 0.71) ou use marginBottom nos cards
                    paddingBottom: 100,
                }}
                showsVerticalScrollIndicator={false}
            >
                <Card />
                <Card />
                <Card />
                <Card />
                
            </ContainerCards>

            <BottomNavBar>

            </BottomNavBar>
        </HomeContainer>
    );
}