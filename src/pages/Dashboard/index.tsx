import React from "react";
import { View, Text } from "react-native";

import { Header } from "../Header";
import { PollsList } from "../PollsList";
import {Container} from "./styles"

export function Dashboard(){
    return(
        <>
            <Header title="Todas as Pesquisas" btnText="+"></Header>
            <Container>
                <PollsList/>
            </Container>
        </>
    )
}

