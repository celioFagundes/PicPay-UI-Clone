import React from 'react';
import { Wrapper, Container, SearchText } from './style';
import {Ionicons} from '@expo/vector-icons';

const  SearchInput = ()  =>{
    return(
        <Wrapper>
            <Container>
                <Ionicons name = 'search-sharp' size = {20} color = '#39464e'/>
                <SearchText>O que você quer pagar?</SearchText>
            </Container>
        </Wrapper>
    )
};

export default SearchInput