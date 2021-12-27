import React from 'react';
import {HeaderContainer, HeaderInfo, BalanceContainer, BalanceTitle, Balance} from './styles';
import {MaterialIcons,Ionicons, FontAwesome} from '@expo/vector-icons';

export default function Header() {
    return(
        <HeaderContainer>
            <HeaderInfo>  
                <MaterialIcons name = 'qr-code-scanner' size = {30} color = "#00ac4a" />
                <FontAwesome name = 'user-circle' size = {30} color = "#8ec29b" style ={{marginLeft:18}}/>
                <BalanceContainer>
                    <BalanceTitle>Olá, @gabriel.silva</BalanceTitle>
                    <Balance>R$ 0,00</Balance>
                </BalanceContainer>
            </HeaderInfo>
            <Ionicons name = 'gift-outline' size = {24} color = "#00ac4a"/>
        </HeaderContainer>
    )
};
