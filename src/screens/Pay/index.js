import React from 'react';

import { Wrapper , IconArea} from './styles';
import FocusAwareStatusBar from '../../FocusAwareStatusBar';
import {MaterialIcons} from '@expo/vector-icons';

import PayArea from '../../components/PayComponents/PayArea'
import Map from '../../components/PayComponents/Map';
import Services from '../../components/PayComponents/PayServices'

export default function Pay(){
    return (
        <Wrapper>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#f2f2f2"/>
            <IconArea>
                <MaterialIcons name = 'qr-code-scanner' size = {30} color = "#00ac4a" />
            </IconArea>
            <PayArea/>
            <Map/>
            <Services/>
            
        </Wrapper>
    )}