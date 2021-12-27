import React, {useState} from 'react';

import { 
        HeaderContainer,
        MyAccount,
        AccountContainer,
        AccountInfo,AccountBold,
        AccountTitle,
        IconCircle,     
        Title,
        BalanceContainer,ValueContainer,
        Value,
        Bold,
        EyeButton,
        Info,
        } from './styles';
    
import {Feather,MaterialCommunityIcons, Octicons} from '@expo/vector-icons';

export default function BalanceHeader (){

    const[isVisible,setIsVisible] = useState(true)
   
    const changeVisibility = () =>{
        setIsVisible((prevState) => !prevState)
    }
    return (

        
        <HeaderContainer>
            <AccountContainer>
                <MyAccount>
                    <AccountTitle>
                        Minha conta:
                    </AccountTitle>
                    <AccountInfo>
                        Ag <AccountBold>0001</AccountBold> <Octicons name="primitive-dot" size={12} color="#fff" /> Cc <AccountBold>01234567-8</AccountBold>
                    </AccountInfo>
                </MyAccount>
                <IconCircle>
                    <MaterialCommunityIcons name ='trending-up' color ='#fff' size = {20}/>
                </IconCircle>
            </AccountContainer>
            <Title>
                Saldo rendendo 100% do CDI:
            </Title>
            <BalanceContainer>
                <Value>R$ <Bold>{isVisible ? '0,00' : '----'}</Bold></Value>
                <EyeButton onPress = {changeVisibility}>
                    <Feather name = {isVisible ?'eye' : 'eye-off'} size = {28} color = '#fff'/>
                </EyeButton>
                </BalanceContainer>
            <Info>
                R$ 0,00 desse saldo é de cashback 
            </Info>
            
    
        </HeaderContainer>
        
    
    











    )
}
