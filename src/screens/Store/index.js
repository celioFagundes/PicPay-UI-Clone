import React from 'react';
import  FocusAwareStatusBar from '../../FocusAwareStatusBar';
import News from '../../components/StoreComponents/News';
import MyOrders from '../../components/StoreComponents/MyOrders';
import StoreList from '../../components/StoreComponents/StoreList';
import {Ionicons,MaterialIcons} from '@expo/vector-icons';
import { Wrapper , Header, SearchBar, SearchText,ScrollView} from './styles';

export default function StoreScreen(params) {
        return(
            <Wrapper>
                <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#f2f2f2"/>
                <Header>
                    <MaterialIcons name = 'qr-code-scanner' size = {30} color = "#00ac4a" />
                    <SearchBar>
                        <Ionicons name = 'search-sharp' size = {20} color = '#39464e'/>
                        <SearchText>
                            O que você quer comprar?
                        </SearchText>
                    </SearchBar>
                </Header>
                <ScrollView>
                    <News/>
                    <MyOrders/>
                    <StoreList/>
                </ScrollView>
            </Wrapper>
        )
};
