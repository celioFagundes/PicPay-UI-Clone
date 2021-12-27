import styled from 'styled-components/native';

export const Wrapper = styled.View`
    padding:0px 15px;
    flex:1;
    background-color:${props => props.theme.background}
`;
export const Header = styled.View`
    flex-direction:row;
    align-items:center;
    padding: 15px 0px;
    justify-content:space-between
`;
export const SearchBar = styled.TouchableOpacity`
    margin-left: 15px;
    padding:8px 10px;
    flex:1;
    flex-direction:row;
    align-items:center;
    border-radius:20px;
    border-width:1px;
    border-color: #cccccc
`;
export const SearchText = styled.Text`
    font-size: 16px;
    margin-left:10px
`;
export const ScrollView = styled.ScrollView`
  
`;