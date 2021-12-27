import React from 'react';
import { Button,Label } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export default function PayButton({focused}) {

    return (
        <Button
        focused = {focused ? '#016533' : '#00ac4a'}
        >
            <MaterialIcons 
            name = "attach-money" 
            size = {32} 
            color = {'#fff'}/>
            
        </Button>
    )
    
};
