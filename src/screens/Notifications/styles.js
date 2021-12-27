import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background-color: ${props => props.theme.background};
    flex:1
`;  
export const Header = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:20px 15px;
    border-color: rgba(0,0,0,0.1);
    border-bottom-width:1px
`;  
export const Title = styled.Text`
    font-size:24px;
    font-weight:bold
`;
export const Config = styled.TouchableOpacity`
    
`;
export const ConfigLabel = styled.Text`
    color:#1bc272;
    font-weight:bold
`;
