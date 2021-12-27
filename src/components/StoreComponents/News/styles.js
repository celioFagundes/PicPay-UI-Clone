import styled from 'styled-components/native';

export const Wrapper = styled.View`
  
`;
export const Title = styled.Text`
    font-size:18px;
    font-weight:700;
    margin: 10px 0px
  
`;  
export const ScrollContainer = styled.ScrollView`
  
`;  
export const Item = styled.TouchableOpacity`
    background-color:${props => props.bgcolor};
    height:150px;
    width:300px;
    margin-right:10px;
    border-radius:6px
`;  
