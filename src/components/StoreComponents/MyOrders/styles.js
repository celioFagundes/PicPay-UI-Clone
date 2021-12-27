import styled from 'styled-components/native';

export const Wrapper = styled.View`
        padding:20px 0px
`;
export const Button = styled.TouchableOpacity`
        flex-direction:row;
        justify-content:space-between;
        border-top-width:0.2px;
        border-left-width: 0.2px;
        border-right-width: 0.2px;
        border-bottom-width: 1px;
        border-color: rgba(0,0,0,0.2);
        border-radius:10px;
        padding:18px 10px;
        
`;
export const  Container= styled.View`
    flex-direction:row;
    align-items:center;

`;

export const Title = styled.Text`
    font-weight:bold;
    font-size:14px;
    margin-left:10px
`;

export const Arrow = styled.Text`
    color: #000;
    font-size:26px;
    margin-right:20px
`;