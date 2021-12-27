import React, {useState}  from 'react';

import { Wrapper,SuggestionsTabs,Tab, TabTitle, HorizontalContainer, Option, Img, Label} from './styles';
import img1 from '../../../Images/01.png';
import img2 from '../../../Images/02.png';
import img3 from '../../../Images/03.png';
import img4 from '../../../Images/04.png';
import img5 from '../../../Images/05.png';
import img6 from '../../../Images/06.png';
import img7 from '../../../Images/07.png';

const items = [
    {
        key : String(Math.random()),
        img : img1,
        label : 'Recarga de celular'
    },
    {
        key : String(Math.random()),
        img : img2,
        label : 'Uber'
    },
    {
        key : String(Math.random()),
        img : img3,
        label : 'Transporte'
    },
    {
        key : String(Math.random()),
        img : img4,
        label : 'TV'
    },
    {
        key : String(Math.random()),
        img : img5,
        label : 'Doaçôes'
    },
    {
        key : String(Math.random()),
        img : img6,
        label : 'Pagar Conta'
    },
    {
        key : String(Math.random()),
        img : img7,
        label : 'Cobrar'
    },
]
export default function Suggestions () {

    const [isActiveSug, setIsActiveSug] = useState(true)
    const [isActiveFav, setIsActiveFav] = useState(false)

    const toggleActive = (id) => {
        if( id == 'Sug'){
            setIsActiveSug(true)
            setIsActiveFav(false)
        }else{
            setIsActiveFav(true)
            setIsActiveSug(false) 
        }
    }

    
    return (

        <Wrapper>
            <SuggestionsTabs>
                <Tab active = {isActiveSug} onPress = {() => toggleActive('Sug')}>
                <TabTitle>Sugestões</TabTitle>
                </Tab>
                <Tab active = {isActiveFav} onPress = {() => toggleActive('Fav')}>
                <TabTitle>Favoritos</TabTitle>
                </Tab>
            </SuggestionsTabs>
            
            <HorizontalContainer >
                {items.map((item)=>(
                    <Option key = {item.key}>
                        <Img source = {item.img}/>
                        <Label>{item.label}</Label>
                    </Option>
                ))}
            </HorizontalContainer>
        </Wrapper>
    )
}