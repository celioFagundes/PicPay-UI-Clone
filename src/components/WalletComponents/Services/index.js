import React from 'react';
import { Container, Title, OptionsContainer,ServiceOption, OptionLabel } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const items =[
    {
        key : 1,
        iconName : "cash-plus",
        label : 'Adicionar dinheiro'
    },
    {
        key : 2,
        iconName : "cash-refund",
        label : 'Retirar dinheiro'
    },
    {
        key : 3,
        iconName : "script-text-outline",
        label : 'Meu          extrato'
    }
]
export default function Services() {
    return (
        <Container>
            <Title>Serviços</Title>
            <OptionsContainer>
                {items.map((item)=>(
                    <ServiceOption key = {item.key}>
                        <MaterialCommunityIcons name={item.iconName} size={30} color="#01ad4b" />
                        <OptionLabel>{item.label}</OptionLabel>
                    </ServiceOption>
                ))}
            </OptionsContainer>
            
            
        </Container>
    )
};
