import styled from 'styled-components/native';

export const Wrapper = styled.View`
  
`;
export const TabContainer = styled.ScrollView`
   
    border-bottom-width:1px;
    border-bottom-color: rgba(0,0,0,0.1)
`; 
export const Tab = styled.TouchableOpacity`
    padding:0px 10px;
    margin-right:17px;
    
    
    
`;
export const TabTitle = styled.Text`
    color : ${props => props.active? '#000' : '#8b9499'};
    font-weight:bold;
    border-bottom-width:3px;
    border-bottom-color: ${props => props.active ? '#00ac4a' : 'transparent'};
    padding-bottom:10px
`;
export const ListsContainer = styled.View`

    
`;
export const ListItem = styled.View`
    padding:20px 0px;
    flex-direction:row;
    align-items:center;
`;
export const ItemImage = styled.View`
    height:50px;
    width:50px;
    border-radius:25px;
    background-color:${props =>props.bgcolor}
`;
export const Description = styled.View`
    margin-left: 15px
`;
export const ItemTitle = styled.Text`
    color:#000;
    font-weight:bold
`;
export const ItemSubtitle = styled.Text`
    color: rgba(0,0,0,0.4)
`;