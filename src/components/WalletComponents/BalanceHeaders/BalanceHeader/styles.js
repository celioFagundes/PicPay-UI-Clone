import { Dimensions } from 'react-native';
import styled from 'styled-components';

const windowWidth = Dimensions.get('window').width + 'px';

export const HeaderContainer = styled.View`
    flex:1; 
    padding-top: 15px;
    align-items:center;   
  
`;
export const AccountContainer = styled.View`
    height:30px;
    width:${windowWidth};
    padding:20px; 
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-bottom:20px;
    
`;
export const MyAccount = styled.View`
    flex:1;
    
`;
export const AccountTitle = styled.Text`
    font-size: 12px;
    color:#fff;
    
    
`;
export const AccountInfo = styled.Text`
    font-size: 12px;
    color:#fff;
   
    
`;
export const AccountBold = styled.Text`
    font-weight:bold;
    color:#fff;
`;
export const IconCircle = styled.TouchableOpacity`
    height: 36px;
    width:36px;
    border-radius:18px;
    border-width:1px;
    border-color:#84d4b7;
    align-items:center;
    justify-content:center
`;
export const  Title= styled.Text`
    color:#fff;
    font-size: 16px;
`;
export const BalanceContainer = styled.View`
    margin: 12px 0;
    flex-direction:row;
    align-items:center
`;

export const  Value = styled.Text`
    color:#fff;
    font-size: 38px;   
`;
export const Bold = styled.Text` 
    font-weight:bold;
    color:#fff;      

`;
export const EyeButton = styled.TouchableOpacity`
    margin-left:10px
`;
export const  Info= styled.Text`
    color:#fff;
    font-size: 14px;
    
`;

    