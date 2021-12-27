import React from 'react';
import { Wrapper,Button , Container,Title, Arrow} from './styles';
import {MaterialCommunityIcons,Entypo} from '@expo/vector-icons';

export default function MyOrders(params) {
    return (
        <Wrapper>
            <Button >
                <Container>
                    <MaterialCommunityIcons name="text-box-outline" size={24} color="black" />
                    <Title>Meus pedidos</Title>
                </Container>
                <Arrow>{">"}</Arrow>
            </Button>
        </Wrapper>
    )
};
