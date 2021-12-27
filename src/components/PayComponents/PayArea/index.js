import React from 'react';
import { Title, Wrapper, SearchContainer, SearchLabel , PayOptions, Option, OptionLabel } from './styles';
import {Ionicons, MaterialCommunityIcons, Fontisto} from '@expo/vector-icons';
import SearchInput from '../../SearchInput';
const items =[
    {
        key : 1,
        lib: MaterialCommunityIcons,
        iconName : "account-circle-outline",
        label : 'Pagar Pessoas'
    },
    {
        key : 2,
        iconName : "cards-diamond-outline",
        label : 'Pix',
        lib: MaterialCommunityIcons,
       
    },
    {
        key : 3,
        iconName : "barcode-outline",
        label : 'Pagar boleto',
        lib: Ionicons,
    },
    {
        key : 4,
        iconName : "shopping-pos-machine",
        label : 'Pagar nas maquininhas',
        lib: Fontisto,
    },
    {
        key : 5,
        iconName : "message-outline",
        label : 'Fazer cobrança',
        lib: MaterialCommunityIcons,
    }
]
export default function PayArea() {

    return(
        <Wrapper>
            <Title>Pagar</Title>
            <SearchInput/>
            <PayOptions>
                {items.map((item) =>(
                    <Option key = {item.key}>
                        <item.lib  name = {item.iconName} size={24} color="#01ad4b"/>
                    <OptionLabel>{item.label}</OptionLabel>
                </Option>
                ))}    
            </PayOptions>
        </Wrapper>
    )
};
