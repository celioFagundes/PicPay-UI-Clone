import styled from "styled-components/native";


export const Button = styled.View`
        width : 50px;
        height:50px;
        border-radius: 25px;
        background-color: ${props => props.focused};
        align-items: center;
        justify-content:center;
        margin-bottom: 15px

`; 
