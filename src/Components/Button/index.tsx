import React from "react";
import { Text, TouchableOpacity } from "react-native";

import {Container, ContainerSucessBlue, ContainerSucess, TextButton, TextButtonLight} from "./style";

export function Button(props:{text:string, button_style:string}){

    const button  = () => {
        switch (props.button_style) {
            case "sucess_blue":
                return(
                    <ContainerSucessBlue>
                        <TextButtonLight>{props.text}</TextButtonLight>
                    </ContainerSucessBlue>
                );
            case "sucess":
                return(
                    <ContainerSucess>
                        <TextButtonLight>{props.text}</TextButtonLight>
                    </ContainerSucess>
                );
            default:
                return(
                    <Container>
                        <TextButton>{props.text}</TextButton>
                    </Container>
                );
        }
        return <></>
    }

    return(
        <>
            {button()}
        </>
    );
}