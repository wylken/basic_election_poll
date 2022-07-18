import React from "react";
import { Text } from "react-native";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { PollsList } from "../../Components/PollsList";
import { Container } from "../../Components/PollsList/styles";
import { PollNameInput } from "./style";

export function AddPoll(){
    
    return(
        <>
            <Header 
                title="Adicionar Pesquisa"
                icon="arrow-back-sharp"
            />
            <Container>
                <PollNameInput 
                    placeholder="Nome da pesquisa..."
                />
                <Button
                    text="Adicionar pergunta"
                    button_style="sucess_blue"
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