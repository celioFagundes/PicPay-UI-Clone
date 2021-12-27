import styled from 'styled-components/native';
export const Wrapper = styled.View`
margin-bottom:10px;
`;
export const Button = styled.TouchableOpacity`
        flex-direction:row;
        justify-content:space-between;
        border-top-width:0.2px;
        border-left-width: 0.2px;
        border-right-width: 0.2px;
        border-bottom-width: 2px;
        border-color: rgba(0,0,0,0.2);
        border-radius:10px;
        padding:15px 10px;
        
`;
export const  Container= styled.View`
    flex-direction:row;
    align-items:center;

`;
export const Description = styled.View`
    margin-left:10px
`;
export const Title = styled.Text`
    font-weight:bold;
    font-size:14px
`;
export const Subtitle = styled.Text`
    font-size:12px
`;
export const Arrow = styled.Text`
    color: #00ac4a;
    font-size:24px;
    margin-right:10px
`;