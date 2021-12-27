import styled from "styled-components/native";



export const Wrapper = styled.View`
       flex: 1 ;
       background-color: ${props => props.theme.background};
`;
export const ScrollContainer = styled.ScrollView`
`;


export const UseBalance = styled.View`
    background-color: #fff;
    height: 60px;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
    padding: 0 16px;
    border-width:1px;
    border-color: #dedede
`;
export const UseBalanceTitle = styled.Text`
    font-size: 16px;;
    
    color: #2f3a3e
`;
export const PaymentMethods = styled.View`
    
    padding: 20px 16px;
    
`;
export const PaymentTitle = styled.Text`
    font-size:16px;
    font-weight:bold;
    color: #2f3a3e
`;
export const Card = styled.View`
    background-color:#fff;   
    padding:20px;
    border-radius:8px;
    margin-top:10px;
    border-width:1px;
    border-color: #e5e5e5
    
`;
export const CardBody = styled.View`
    flex-direction:row;
    
`;
export const CardDetails = styled.View`
    flex:1;
    margin-right:10px
`;
export const CardTitle = styled.Text`
    font-size:18px;
    color:#232c31;
    font-weight:bold
`;
export const CardInfo = styled.Text`
    font-size:14px;
    color: #6c7981;
    margin-top:15px
`;
export const Img = styled.Image`
    width:60px
`;
export const AddButton = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    margin-top:25px
`;
export const AddLabel = styled.Text`
    color: #04a94b;
    font-size:18px;
    font-weight:bold;
    margin-left:15px
`;
export const UseTicketButton = styled.TouchableOpacity`
    height: 40px;
    flex-direction:row;
    align-self:center;
    margin-top:25px
`;
export const UseTicketLabel = styled.Text`
    color: #04a94b;
    font-size:16px;
    font-weight:bold;
    margin-left:15px;
    text-decoration-line: underline
`;
