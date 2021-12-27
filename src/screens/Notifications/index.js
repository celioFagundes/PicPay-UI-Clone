import React,{useState} from 'react';
import FocusAwareStatusBar from '../../FocusAwareStatusBar';
import { Wrapper, Header, Title, Config, ConfigLabel} from './styles';
import NotificationList from '../../components/NotificationList';



export default function NotificationsScreen(params) {
    
   

    
    return(
        <Wrapper>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#f2f2f2"/>
            <Header>
                <Title>Notificações</Title>
                <Config>
                    <ConfigLabel>Configurar</ConfigLabel>
                </Config>
            </Header>         
            <NotificationList/>           
        </Wrapper>
    )
};
