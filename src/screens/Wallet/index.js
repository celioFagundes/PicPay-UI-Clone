import React , {useState}from 'react';

import {
    Wrapper,
    ScrollContainer,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentTitle,
    Card,
    CardBody,
    CardDetails,
    CardInfo,
    CardTitle,
    Img,
    AddButton,
    AddLabel,
    UseTicketButton,
    UseTicketLabel
} from './styles';

import {MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
import creditCard from '../../Images/credit-card.png';
import FocusAwareStatusBar from '../../FocusAwareStatusBar'
import {  Switch } from 'react-native';
import BalanceList from '../../components//WalletComponents/BalanceHeaders/BalanceList';
import Services from '../../components/WalletComponents/Services';
import Oportunities from '../../components/WalletComponents/Oportunities';

export default function Wallet(){

    
    const[switchValue,setSwitchValue] = useState(true)

    const toggleSwitchValue = () =>{
        setSwitchValue ((prevState) => !prevState)
    }
    return (

        
        <Wrapper>
            
            <ScrollContainer>
                <BalanceList/>
                <UseBalance>
                    <UseBalanceTitle>Usar saldo em Carteira ao pagar</UseBalanceTitle>
                    <Switch
                    value = {switchValue}
                    onValueChange = {toggleSwitchValue}
                    trackColor = {{ false: "#6b6b6b", true: "#52e78c" }}
                    thumbColor ={switchValue ? "#10c36d" : "#ececec"}/>
                </UseBalance>
                <Services/>
                <Oportunities/>
                <PaymentMethods>
                    <PaymentTitle>Formas de Pagamento</PaymentTitle>
                    <Card>
                        <CardBody>
                            <CardDetails>
                               <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                               <CardInfo>Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay</CardInfo>
                            </CardDetails>
                            <Img source = {creditCard} resizeMode= "contain"/>
                        </CardBody>
                        <AddButton>
                            <AntDesign name = 'pluscircleo' size = {30} color = "#04a94b"/>
                            <AddLabel>
                                Adicionar cartão de crédito
                            </AddLabel>
                        </AddButton>
                    </Card>
                    <UseTicketButton>
                        <MaterialCommunityIcons name = 'ticket-outline' size = {20} color = "#04a94b"/>
                        <UseTicketLabel>Usar código promocional</UseTicketLabel>
                    </UseTicketButton>
                </PaymentMethods>
            </ScrollContainer>
            
        </Wrapper>
    )}