import React from 'react';
import FocusAwareStatusBar from '../../FocusAwareStatusBar'
import { Wrapper,ScrollContainer} from './styles';
import Header from '../../components/HomeComponents/Header';
import SearchBar from '../../components/HomeComponents/SearchBar';
import Suggestions from '../../components/HomeComponents/Suggestions';
import SpecialSelection from '../../components/HomeComponents/SpecialSelection';
import PicPayCardOffer from '../../components/HomeComponents/PicPayCard';
import Activities from '../../components/HomeComponents/Activities';
import Tips from '../../components/HomeComponents/Tips';
import FindStore from '../../components/HomeComponents/FindStore';
import Safety from '../../components/HomeComponents/Safety';
import SearchInput from '../../components/SearchInput';


export default function Home(){
    
    return (
            <Wrapper >
                <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#f2f2f2"/>
                <ScrollContainer>
                    <Header/>
                    <SearchInput/>
                    <Suggestions/>
                    <SpecialSelection/>
                    <PicPayCardOffer/>
                    <Activities/>
                    <Tips/>
                    <FindStore/>
                    <Safety/>
                </ScrollContainer>
            </Wrapper>
            
    
)}