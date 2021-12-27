import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons, Ionicons, } from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';
import NotificationsScreen from './screens/Notifications';
import StoreScreen from './screens/Store';
import PayButton from './components/PayButton';

const icons = {
    Home :{
        lib: Ionicons,
        name : 'home-outline',
        namef: 'home',
        libf: Ionicons,
    },
    Wallet :{
        lib: Ionicons,
        name : 'wallet-outline',
        namef: 'wallet-sharp',
        libf: Ionicons,
    },
    Notifications :{
        lib: Ionicons,
        name : 'ios-notifications-outline',
        namef: 'ios-notifications-sharp',
        libf: Ionicons,
    },
    Store :{
        lib: MaterialCommunityIcons,
        name : 'shopping-outline',
        namef: 'shopping',
        libf: MaterialCommunityIcons,
    }
}

const Tab = createBottomTabNavigator();

export default function Navigation() {

    return(
        <Tab.Navigator
        initialRouteName = "Home"
        screenOptions = {({ route  }) => ({
            tabBarIcon : ({color,  focused}) => {
                if(route.name === 'Pay'){
                    return <PayButton focused = {focused}/>
                }if(!focused){
                const {lib: Icon, name} = icons[route.name];
                return <Icon name = {name} size ={28} color = {color}/>
                }else{
                const {libf: Icon, namef} = icons[route.name];
                return <Icon name = {namef} size ={28} color = {color}/>
                }
            },
        })} 
        tabBarOptions = {{
            style:{
                backgroundColor :'#fff',
                borderTopColor : 'rgba(255,255,255,0.2)',
                height:60,
                paddingBottom:10,
            },
            labelStyle: {
                    fontSize: 10,
                
            },
            activeTintColor : '#016533',
            inactiveTintColor: '#525f67',
        }}
        
        >
            
            <Tab.Screen
             name = "Home" 
             component = {HomeScreen}
             options = {{title : "Inicio"}}
             />
            <Tab.Screen 
             name = "Wallet" 
             component = {WalletScreen}
             options = {{title: "Carteira"}}
            />
            <Tab.Screen 
             name = "Pay" 
             component = {PayScreen}
             options = {{title : "Pagar"}}
            />

            <Tab.Screen 
             name = "Notifications" 
             component = {NotificationsScreen}
             options = {{title : "Notificaçôes"}}
            />
            <Tab.Screen 
             name = "Store" 
             component = {StoreScreen}
             options = {{title : "Store"}}
            />
            
        </Tab.Navigator>
    )
    
};
