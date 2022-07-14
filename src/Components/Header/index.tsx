import React from "react";
import  Ionicons  from '@expo/vector-icons/Ionicons';
 

import {Container, Title, TitleButton} from "./styles"

export function Header(props: {title:string, icon:string}){
    return(
       <Container>
            <Title>{props.title}</Title>
            <TitleButton>
               <Ionicons name= {props.icon} size={24} color="white" /> 
            </TitleButton>
        
       </Container>
    )
}