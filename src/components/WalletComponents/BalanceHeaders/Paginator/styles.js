import styled from 'styled-components';
import {Animated} from 'react-native'

export const PaginatorWrapper = styled.View`
    
    
    align-items:center;
    justify-content:center;
    flex-direction: row;
    margin-bottom:20px
  
`;
export const Dots = styled(Animated.View)`
    
    border-radius: 4px;
    background-color:#fff;
    margin-left: 8px;
    margin-right: 8px;
    
`;