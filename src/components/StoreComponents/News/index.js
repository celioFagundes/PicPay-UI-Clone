import React from 'react';
import { Wrapper, Title, ScrollContainer, Item } from './styles';

const items =[
    {
        key : String(Math.random()),
        bgcolor: '#5CF2AA'
    },
    {
        key : String(Math.random()),
        bgcolor: '#13F085'
    },
    {
        key : String(Math.random()),
        bgcolor: '#10C26C'
    },
]
export default function News(params) {

    return(
        <Wrapper>
            <Title>Novidades</Title>
            <ScrollContainer horizontal showsHorizontalScrollIndicator = {false}>
                {items.map((item)=>(
                    <Item key = {item.key} bgcolor = {item.bgcolor}>

                    </Item>
                ))}
            </ScrollContainer>
        </Wrapper>
    )

};
