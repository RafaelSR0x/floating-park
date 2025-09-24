import styled from 'styled-components/native';

export const HomeContainer = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #5b37b7;
    border: 0px;
`;

export const HeaderHome = styled.View`
    flex-direction: row;
    align-items: flex-end;
    gap: 42px;
    width: 100%;
    height: 70px;
    background-color: #fff;
    border-radius: 0px 0px 24px 24px;
    margin-top: 30px;
    padding: 15px;
`;

export const LogoHeader = styled.Image``;

export const TitleHeader = styled.Text`
    font-family: PoppinsSemiBold;
    font-size: 18px;
    margin-right: 30px;
`;

export const ContainerCards = styled.ScrollView`
    width: 92%;
    margin-top: 20px;
`;


export const BottomNavBar = styled.View`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 90px;
    background-color: #323232;
    z-index: 10;
    justify-content: center;
    align-items: center;
`;
