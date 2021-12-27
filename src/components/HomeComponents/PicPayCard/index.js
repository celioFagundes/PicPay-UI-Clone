import React from 'react';
import creditcard from '../../../Images/picpaycard.png'
import { Wrapper, Container,DescriptionContainer, Img , Description,Bold, CloseButton, Label} from './styles';
export default function PicPayCardOffer(params) {
    return (
        <Wrapper>
            <Container>
                <DescriptionContainer>
                    <Img source = {creditcard} />
                    <Description>Ei, <Bold>Gabriel</Bold>! Peça agora o <Bold>PicPay Card</Bold>, seu novo{'\n'}cartão sem anuidade</Description>
                </DescriptionContainer>
                <CloseButton>
                    <Label>X</Label>
                </CloseButton>
            </Container>
            
        </Wrapper>
    )
};
