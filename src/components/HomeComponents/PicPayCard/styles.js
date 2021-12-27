import styled from 'styled-components/native';


export const Wrapper = styled.View`
`;
export const Container = styled.View`
    flex-direction:row;
    justify-content:space-between;
    
    background-color: #222d33;
    border-radius:10px
`;
export const DescriptionContainer = styled.View`
    flex-direction:row;
    align-items:center;
    padding: 18px 0px 20px 20px;
`;
export const Img = styled.Image`
    height:50px;
    width:30px;
    border-radius:3px;
    margin-right:10px
`;
export const Description = styled.Text`
    color:#fff
`;
export const Bold = styled.Text`
    font-weight:bold
`; 
export const CloseButton = styled.TouchableOpacity`
    
    padding: 8px 10px 0px 0px
    
`;
export const Label = styled.Text`
    font-size:12px;
    color:#fff;
    font-weight:bold;
    
`;