import React,{useState} from 'react';

import {
    Container,
    Header,
    Title,
    TabContainer,
    Tabs,
    TabTitle,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    CardDescription,
    CardFooter,
    Details,
    Value,
    Divider,
    DateLabel,
    Actions,
    Option,OptionLabel
    }
     from './style';

import avatar from '../../../Images/avatar.png'
import {Ionicons, MaterialCommunityIcons,AntDesign, } from '@expo/vector-icons'

export default function Activities(){
    
    const [colorTabAll,setColorTabAll] = useState('#10c86e');
    const [colorTabMy,setColorTabMy] = useState('#8b9499');
    const [isActiveAll,setIsActiveAll] = useState(true);
    const [isActiveMy,setIsActiveMy] = useState(false);
   
    

    const setActive = (id) =>{
       if( id == '1'){
           setColorTabAll('#11c770')
           setColorTabMy('#8b9499')
           setIsActiveAll(true)
           setIsActiveMy(false)
        }if( id == '2'){
        setColorTabMy('#11c770')
        setColorTabAll('#8b9499')
        setIsActiveAll(false)
        setIsActiveMy(true)
        
    }}
    return (
        <Container>
            <Header>


                <Title>Atividades</Title>
                <TabContainer >                  
                        <Tabs  activate = {isActiveAll} onPress ={() =>setActive('1')}>
                            <TabTitle color = {colorTabAll} >Todos</TabTitle>
                        </Tabs>
                        <Tabs  activate = {isActiveMy} onPress ={() =>setActive('2')}>
                            <TabTitle color = {colorTabMy} >Minhas</TabTitle>
                        </Tabs>                  
                </TabContainer>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source = {avatar}/>
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@gabriel</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <CardDescription>Almoço</CardDescription>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 150,00</Value>
                        <Divider></Divider>                       
                        <Ionicons name = 'people-outline' color = '#adb1bd' size = {18}/>
                        <DateLabel>Há 2 anos</DateLabel>                        
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name = 'comment-outline' size = {14} color = '#adb1bd'/>
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name = 'hearto' size = {14} color = '#adb1bd'/>
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>

            </Card>
        </Container>
    )

    
}