import styled from 'styled-components/native';

export const Container = styled.View`
    
    flex:1 ;
    padding: 0 20px;
    background-color : ${props => props.bgcolor};
`;
export const Notification = styled.TouchableOpacity`
    height:75px;
    padding:8px 5px;
    border-color: rgba(0,0,0,0.07);
    border-bottom-width:0.7px;
`;
export const Description = styled.Text`
    font-size:14px;
    font-weight:100;
    color: rgba(0,0,0,0.6);
    margin-bottom:5px
`;
export const Date = styled.Text`
    font-size:12px;
    color: rgba(0,0,0,0.5);
`;