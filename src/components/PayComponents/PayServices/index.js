import React from 'react';

import { Wrapper, Container, Title, ServicesContainer, ServiceOption, ServiceLabel } from './styles';
import {Feather, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
const items = [

    {
        key :1,
        label: 'Recarga de celular',
        iconName : 'smartphone',
        lib: Feather
    },
    {
        key :2,
        label: 'Cartão de transporte',
        iconName : 'ios-bus-outline',
        lib: Ionicons
    },
    {
        key :3,
        label: 'Shell Box',
        iconName : 'gas-station-outline',
        lib: MaterialCommunityIcons
    },
    
]

export default function PayServices(params) {
    return(
        <Wrapper>
            <Container>
                <Title>Serviços</Title>
            </Container>
            <ServicesContainer>
                {items.map((item) =>(
                    <ServiceOption key = {item.key}>
                        <item.lib name = {item.iconName} size={24} color="#01ad4b"/>
                        <ServiceLabel>{item.label}</ServiceLabel>
                    </ServiceOption>
                ))}
            </ServicesContainer>
        </Wrapper>
    )
};
