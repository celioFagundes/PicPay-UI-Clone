import { Dimensions } from 'react-native';
import styled from 'styled-components';


const windowWidth = Dimensions.get('window').width + 'px';

export const HeaderContainer = styled.SafeAreaView`
    flex:1;
    width :${windowWidth};
    align-items:center;
    justify-content:center;
    padding:0 20px
  
`;
export const  Title= styled.Text`
    color:#fff;
    font-size: 24px;
    font-weight: bold;
    margin-top:40px
    
`;

export const  Info= styled.Text`
    color:#fff;
    font-size: 14px;
    text-align:center;
    margin-top:40px;
    
    
`;

export const Action = styled.TouchableOpacity`
    
    align-items:center;
    justify-content:center;
    height:50px;
    width: 160px;
    margin-top:15px;
    border-width: 2px;
    border-radius:25px;
    border-color: #fff;
    
    
`;
export const ActionLabel = styled.Text`
    color : #fff;
    font-size: 14px;
    

`