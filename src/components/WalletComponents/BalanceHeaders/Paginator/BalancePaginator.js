import React from 'react';
import  {useWindowDimensions}  from 'react-native';
import { PaginatorWrapper , Dots} from './styles';

export default function BalancePaginator({data, scrollX}){

    const{width}= useWindowDimensions()

    return (
        <PaginatorWrapper>
            {data.map((_, i) =>{

                const inputRange = [(i -1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [4,8,4],
                    extrapolate : 'clamp'
                })
                const dotHeight = scrollX.interpolate({
                    inputRange,
                    outputRange: [4,8,4],
                    extrapolate : 'clamp'
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3,1,0.3],
                    extrapolate : 'clamp'
                })
                return <Dots height = {dotHeight} width= {dotWidth} opacity ={opacity} key = {i.toString()}/>
            })}
        </PaginatorWrapper>
    )
}