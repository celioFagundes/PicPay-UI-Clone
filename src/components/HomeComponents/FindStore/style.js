import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    margin-bottom:10px;
    border-radius: 8px;
    border-top-width:0.2px;
    border-left-width: 0.2px;
    border-right-width: 0.2px;
    border-bottom-width: 1px;
    border-color: rgba(0,0,0,0.2);
    height: 150px;
    flex-direction:row;
    align-items:center;
    padding : 15px
`;
export const Details = styled.View`
    flex:1
`;
export const Img = styled.Image`
  
`;
export const Description = styled.Text`
    color: #000;
    font-size: 16px;
    
`;
export const Bold = styled.Text`
    font-weight:bold
  
`;
export const Button = styled.Text`
    color: #00ac48;
    padding:10px;
    width :160px;
    text-align:center;
    font-size: 14px;
    font-weight:bold;
    margin-top: 15px;
    border-width: 2px;
    border-color: #00ac48;
    border-radius:20px
`;