import React from 'react';

import { Container ,Details,Description,Bold, Img, Button} from './style';

import img13 from '../../../Images/13.png'

export default function FindStore(){

    return (
        <Container>
            <Details>
                <Description><Bold>Encontre lojas online</Bold> e pague usando seu celular</Description>
                <Button>
                     Encontrar Lojas
                </Button>
            </Details>
            
            <Img source = {img13}/>
        </Container>
    )
}