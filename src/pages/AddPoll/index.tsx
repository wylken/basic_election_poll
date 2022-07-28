import React from "react";
import { Text } from "react-native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { PollsList } from "../../Components/PollsList";
import { Container } from "../../Components/PollsList/styles";
import { PollNameInput } from "./style";


interface NavigationProps {
    navigation: NativeStackNavigationProp<any,any>
};
export function AddPoll({navigation}:NavigationProps){
    
    return(
        <>
            <Container>
                <PollNameInput 
                    placeholder="Nome da pesquisa..."
                />
                <Button
                    text="Adicionar pergunta"
                    button_style="sucess_blue"
                    onPress={() => navigation.navigate("AddQuestion")}
                />
                <PollsList/>
                <Button
                    text="Salvar Pesquisa"
                    button_style="sucess"
                />
            </Container>

        </>
    )
}