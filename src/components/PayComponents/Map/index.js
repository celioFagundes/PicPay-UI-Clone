import React from 'react';
import map from '../../../Images/map.png'
import { Wrapper, Container, Header, Info, Title, Description, ImgContainer,Img } from './styles';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Map() {
    return(
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name = 'map-marker-outline' size = {24} color = {'#01ad4b'}/>
                    <Info>
                        <Title>Locais próximos</Title>
                        <Description>Confira estabelecimentos perto de você</Description>
                    </Info>
                </Header>
                <ImgContainer>
                    <Img source = {map} />
                </ImgContainer>
            </Container>
        </Wrapper>
    )   
};
