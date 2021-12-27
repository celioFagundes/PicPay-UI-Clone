import styled from "styled-components";

export const Wrapper = styled.View`
    margin-bottom:10px;
`;
export const SuggestionsTabs = styled.View`
    flex-direction:row;
    padding-bottom:25px;
    
`;
export const Tab = styled.TouchableOpacity`

    margin-right: 10px;
    padding-bottom:13px;
    border-bottom-width:2px;
    border-color: ${props => props.active ? '#000' : 'transparent'}
`;
export const TabTitle = styled.Text`
    color:rgba(0,0,0,0.6);
    font-size:14px;
    font-weight:bold;
    
`;
export const HorizontalContainer = styled.ScrollView.attrs(()=>({
    horizontal:true,
    showsHorizontalScrollIndicator :false,
    contentContainerStyle:{
        alignItems: 'center',           
    },
}))`
  
    height: 100px;
    
`;

export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right:16px;
    align-items: center;
  

`;
export const Img = styled.Image`
    width:60px;
    height:60px;
  
`;
export const Label = styled.Text`
    flex:1;
    color: #000;
    margin-top:8px;
    font-size: 12px;
    text-align:center
`;