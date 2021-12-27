import React from 'react';

import { Container ,Details,Description,Bold, Img, Button} from './style';

import img13 from '../../../Images/13.png'

export default function Safety(){

    return (
        <Container>
            <Details>
                <Description>Deixe seu PicPay<Bold> ainda mais seguro</Bold> </Description>
                <Button>
                     Conferir dicas
                </Button>
            </Details>
            
            <Img source = {img13}/>
        </Container>
    )
}