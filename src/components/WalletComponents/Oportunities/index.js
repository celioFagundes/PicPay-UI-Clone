import React from 'react';

import { Container, Title, Option, OptionContainer,OptionDetails,OptionTitle, OptionDescription,OptionButton,ButtonTitle, Img } from './styles';
import Card from '../../../Images/picpaycard.png'

export default function Oportunities(params) {
    return (
        <Container>
            <Title>Oportunidades</Title>
            <Option>
                
                    <OptionDetails>
                        <OptionTitle>{'Seu PicPay Card está\n'}Pré-aprovado!</OptionTitle>
                        <OptionDescription>
                            {'Peça agora e deixe sua experiência\n'}PicPay ainda mais completa.
                        </OptionDescription>
                        <OptionButton>
                            <ButtonTitle>Toque para saber mais</ButtonTitle>
                        </OptionButton>
                    </OptionDetails>
                    <Img source = {Card} resizeMode = {'contain'}/>
                
            </Option>
        </Container>
    )
};
