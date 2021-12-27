import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    padding: 5px 15px;
    
`;
export const Title = styled.Text`
    font-size:16px;
    font-weight:bold;
    margin-bottom:7px
`;
export const Option = styled.View`
    flex:1;
    flex-direction:row;
    padding: 16px 15px;
    border-width:1px;
    border-radius: 10px;
    border-color: #e5e5e5
`;

export const OptionDetails = styled.View`
    flex:3;
     
`;
export const OptionTitle = styled.Text`
    font-size:16px;
    font-weight:bold;
    margin-bottom:10px
`;
export const OptionDescription = styled.Text`
    color: #707980;
`;

export const Img = styled.Image`
    flex:1px;
    height:80px;
    width:50px;
    align-self:center;
   
`;
export const OptionButton = styled.TouchableOpacity`
  
`;
export const ButtonTitle = styled.Text`
    font-size: 16px;
    color :#01ad4b;
    font-weight:bold
`;
