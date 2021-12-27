import React, {useState, useRef} from 'react';
import { FlatList, Animated } from 'react-native';
import data from './data';
import BalancePaginator from './Paginator/BalancePaginator';
import BalanceItem from './BalanceItem/BalanceItem';
import { Container, ListContainer } from './styles';

import FocusAwareStatusBar from '../../../FocusAwareStatusBar'

export default function BalanceList() {

    
    const [ currentIndex, setCurrentIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;
    const dataRef = useRef(null)
    const viewableItemsChanged = useRef (({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index)
        
    }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold : 50}).current;
    
    return (
        
        <Container colors = {(currentIndex == 0) ? ["#36ae81", "#33ac7f"] : ['#2a716d', '#0d2a2d']}>
            <FocusAwareStatusBar barStyle="light-content" backgroundColor={(currentIndex == 0) ? "#2ba678" : '#235e5a'}/>
            <ListContainer>
                <FlatList
                    data = {data}
                    renderItem = {({item}) =>  <BalanceItem item = {item}/>}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    pagingEnabled
                    bounces = {false}
                    onScroll = {Animated.event([{nativeEvent: {contentOffset: {x : scrollX}}}],{
                    useNativeDriver: false,
                    })}
                    onViewableItemsChanged = {viewableItemsChanged}
                    viewabilityConfig = {viewConfig}
                    scrollEventThrottle = {32}
                    ref = {dataRef}
                />
                <BalancePaginator data = {data} scrollX = {scrollX}/>
            </ListContainer>
            
            
        </Container>
    )
};
