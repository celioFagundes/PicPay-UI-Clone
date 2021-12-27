import styled from 'styled-components/native';


export const Wrapper = styled.View`
    padding: 15px
`;
export const Title = styled.Text`
    font-size: 28px;
    font-weight:bold;
    padding-bottom:25px
`;
export const SearchContainer = styled.TouchableOpacity`
    padding:8px 10px;
    flex-direction:row;
    align-items:center;
    border-radius:20px;
    border-width:1px;
    border-color: #cccccc
`;
export const SearchLabel = styled.Text`
    font-size: 16px;
    margin-left:10px
`;
export const PayOptions = styled.ScrollView.attrs(() =>({
    horizontal:true,
    showsHorizontalScrollIndicator: false,
    
}))`
    margin-top : 15px;
`;`
    
`;
export const Option = styled.TouchableOpacity`
    height:100px;
    width:100px;
    padding:10px;
    margin-right: 5px;
    justify-content:space-between;
    border-radius: 8px;
    border-top-width:0.3px;
    border-left-width: 0.3px;
    border-right-width: 0.3px;
    border-bottom-width: 1px;
    border-color: rgba(0,0,0,0.2);
`;
export const OptionLabel = styled.Text`
    color:rgba(0,0,0,0.6)
`;