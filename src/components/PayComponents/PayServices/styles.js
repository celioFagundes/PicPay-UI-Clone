import styled from 'styled-components/native';

export const Wrapper = styled.View`
    padding:15px
`;
export const Container = styled.View`
    
`;
export const Title = styled.Text`
    color:rgba(0,0,0,0.6);
    font-size:20px;
    font-weight:bold
`;
export const ServicesContainer = styled.View`
    flex-direction:row
`;
export const ServiceOption = styled.TouchableOpacity`
    height:100px;
    width:100px;
    padding:10px;
    margin-top : 15px;
    margin-right: 5px;
    justify-content:space-between;
    border-radius: 8px;
    border-top-width:0.3px;
    border-left-width: 0.3px;
    border-right-width: 0.3px;
    border-bottom-width: 1px;
    border-color: rgba(0,0,0,0.2);

`;
export const ServiceLabel = styled.Text`
  
`;