import React from 'react';


import { Wrapper,Title, Container, Option, OptionTitle, Img  } from './styles';

import img8 from '../../../Images/08.png'
import img9 from '../../../Images/09.png'
import img10 from '../../../Images/10.png'
import img11 from '../../../Images/11.png'
import img12 from '../../../Images/12.png'


const items = [
    {
        key: String(Math.random()),
        title : 'Universitario! Cadastre-se e ganhe mais cashback',
        
        img : img8
    },
    {
        key: String(Math.random()),
        title : 'Ganhe descontos em  eventos e lazer',
        
        img : img9
    },
    {
        key: String(Math.random()),
        title : 'Encotre outros usuarios do PicPay',
        
        img : img10
    },
    {
        key: String(Math.random()),
        title : 'Pague sem sair de casa',
        
        img : img11
    },
    {
        key: String(Math.random()),
        title : 'Aprenda tudo sobre o aplicativo',
        
        img : img12
    },
    
]
export default function Tips(){

    return(
        <Wrapper>
            <Title>Compre o que quiser</Title>
            <Container>
                {items.map((item) =>(
                <Option key = {item.key} >
                    <OptionTitle>{item.title}</OptionTitle>
                    <Img source = {item.img} />
                </Option>
                ))}
            </Container>
        </Wrapper>
    )
}