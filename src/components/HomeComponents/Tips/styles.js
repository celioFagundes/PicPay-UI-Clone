import styled from "styled-components";

export const Wrapper = styled.View`
    margin-bottom:10px;
`;
export const Title = styled.Text`
    font-size: 18px;
    font-weight:bold
`;
export const Container = styled.ScrollView.attrs(() =>({
    horizontal:true,
    showsHorizontalScrollIndicator: false,
    
}))`
    margin-top : 25px;
`;

export const Option = styled.TouchableOpacity`
    
    height: 220px;
    width: 140px;
    padding:15px;
    justify-content: space-between;
    margin-left: 5px;
    border-radius: 8px;
    border-top-width:0.2px;
    border-left-width: 0.2px;
    border-right-width: 0.2px;
    border-bottom-width: 2px;
    border-color: rgba(0,0,0,0.2);
`;
export const  OptionTitle= styled.Text`
    color : #000;
    font-size : 13px;
    
`;
export const Img = styled.Image`
    align-self:center
`;