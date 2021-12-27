import React from 'react';
import { Wrapper,Button , Container, Description, Title, Subtitle, Arrow} from './styles';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function SpecialSelection(params) {
    return (
        <Wrapper>
            <Button >
                <Container>
                    <MaterialCommunityIcons name ='ticket-percent-outline' size ={30} color = '#00ac4a'/>
                    <Description>
                        <Subtitle>Seleção especial</Subtitle>
                        <Title>Promoções disponíveis</Title>
                    </Description>
                </Container>
                <Arrow>{">"}</Arrow>
            </Button>
        </Wrapper>
    )
};
