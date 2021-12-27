import styled from "styled-components";

export const Container = styled.View`
    margin-top:25px;
    margin-bottom:10px;
    
    
`;

export const Header = styled.View`
    
    flex-direction:row;
    justify-content:space-between;
    padding: 0px 15px 0px 10px;
    

`;
export const Title = styled.Text`

    color:rgba(0,0,0,0.6);
    font-size:15px;
    font-weight:bold

`;
export const TabContainer = styled.View`
    flex-direction:row;
    align-items:center;
    
`;
export const Tabs = styled.TouchableOpacity`
    
    width:90px;
    
    padding-bottom: 15px;
    border-bottom-width: 2px  ;
    border-bottom-color: ${props => props.activate ? '#10c86e' : 'transparent'}

`;
export const TabTitle = styled.Text`
    color : ${props => props.color};
    font-size:14px;
    font-weight:bold;
    text-align:center;
    
`;
export const Card = styled.View`
    
    border-radius: 15px;
    border-top-width:0.5px;
    border-left-width: 0.5px;
    border-right-width: 0.5px;
    border-bottom-width: 2px;
    border-color: rgba(0,0,0,0.2);
    margin-top : 10px;
    padding: 15px
`;

export const CardHeader = styled.View`
    flex-direction:row;
    align-items:center
`;

export const Avatar = styled.Image`
    height: 50px;
    width: 50px
`;

export const Description = styled.Text`
    color: rgba(0,0,0,0.5);
    font-size:16px;
    margin-left:15px
`;

export const Bold = styled.Text`
    color: rgba(0,0,0,0.9);
    
`;
export const CardBody = styled.View`
    margin-top: 20px
`;
export const CardDescription = styled.Text`
    color: rgba(0,0,0,0.4);
    font-size : 18px
`;
export const CardFooter= styled.View`
    margin-top: 15px;
    flex-direction:row;
    justify-content:space-between;
    
`;
export const Details = styled.View`
    flex-direction: row;
    align-items:center
`;
export const Value = styled.Text`
    color : #f75175;
    font-size:14px;
    font-weight:bold
`;
export const Divider = styled.View`
    width:2px;
    height:14px;
    background-color: rgba(255,255,255,0.4);
    margin: 0 10px
`;

export const DateLabel = styled.Text`
    color: #bfbfbf;
    margin-left : 5px
`;
export const Actions = styled.View`
    flex-direction:row;
    align-items:center
`;
export const Option = styled.TouchableOpacity`
    flex-direction:row;
    margin-left:15px;
    align-items:center
`;
export const OptionLabel = styled.Text`
    color: #e0e0e0;
    margin-left:5px
`;