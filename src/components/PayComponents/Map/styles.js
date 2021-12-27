import styled from 'styled-components/native';



export const Wrapper = styled.View`
    padding:0px 15px 
`;
export const Container = styled.TouchableOpacity`
    height:150px;
    border-radius: 8px;
    border-top-width:0.2px;
    border-left-width: 0.2px;
    border-right-width: 0.2px;
    border-bottom-width: 1px;
    border-color: rgba(0,0,0,0.2);
    
    
`;
export const Header = styled.View`   

    flex-direction:row;
    align-items:center;
    padding:15px
`;
export const Info = styled.View`
    margin-left:15px
`;
export const Title = styled.Text`
    font-weight:bold
`;
export const Description = styled.Text`
  
`;
export const ImgContainer = styled.View`
    flex:1; 
    
    align-content:flex-end
`;
export const Img = styled.Image`
    
    height:100%;
    width:100%;
    border-bottom-right-radius:8px;
    border-bottom-left-radius:8px
    
    
    
   
    
    

`;