import React from "react";
import { View, Text } from "react-native";

import { Header } from "../../Components/Header";
import { PollsList } from "../../Components/PollsList";
import {Container} from "./styles"
import { MaterialIcons } from '@expo/vector-icons';

export function Dashboard(){
    return(
        <>
            <Header 
                title="Todas as Pesquisas" 
                btnText="add"
            />
            <Container>
                <PollsList/>
            </Container>
        </>
    )
}

