import React from "react";
import { Text, TouchableOpacity } from "react-native";

import {Container, ContainerSucess, TextButton, TextButtonLight} from "./style";

export function Button(props:{text:string, button_style:string}){
    return(
        <>
        {props.button_style == "sucess"? 
            (
                <ContainerSucess>
                    <TextButtonLight>{props.text}</TextButtonLight>
                </ContainerSucess>
            ):
            (
                <Container>
                    <TextButton>{props.text}</TextButton>
                </Container>
            )
        }
        
        </>
    );
}