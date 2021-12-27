import React from 'react';

import { Container,Notification, Description, Date } from './styles';



export default function NotificationItem({item,onPress,bgColor }) {
    return(
        <Container bgcolor = {bgColor}>
            <Notification onPress ={onPress} >
                <Description>
                  {item.description}
                </Description>
                <Date>
                {item.date}
                </Date>
            </Notification>
        </Container>
    )    
};
