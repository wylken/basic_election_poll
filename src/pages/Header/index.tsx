import React from "react";
import { View, Text } from "react-native";

import {Container, Title, TitleButton} from "./styles"

export function Header(props: {title:string, btnText:string}){
    return(
       <Container>
            <Title>{props.title}</Title>
        <TitleButton>
            <Title>{props.btnText}</Title>   
        </TitleButton>
       </Container>
    )
}