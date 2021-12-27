import styled from "styled-components";

export const Container = styled.View`
    
    padding: 20px 15px 
`;
export const Title = styled.Text`
    color: #2f3a40;
    font-size:16px;
    font-weight:bold;
    margin-bottom:7px
`;
export const OptionsContainer = styled.View`
    flex-direction:row;
`;
export const ServiceOption = styled.TouchableOpacity`
    height: 100px;
    width: 100px;
    padding:15px;
    margin-right:3px;
    border-radius:10px;
    border-width:1px;
    border-color: #e5e5e5;
`;
export const OptionLabel = styled.Text`
    font-size:12px;
    margin-top:10px;
    color: rgba(0,0,0,0.6)
`;