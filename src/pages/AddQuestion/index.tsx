import React, {useState} from "react";
import {ScrollView, FlatList, Text} from "react-native";

import { Button } from "../../Components/Button";
import {Header} from "../../Components/Header"
import { Container, DefaultInput, Row } from "../../styles/style";

interface Answer {
    id: string;
    text:string;
}

export function AddQuestion(){

    const [answers, setAnswers] =  useState<Answer[]>([{id:'1', text:"Wylken aqui..."}]);


    function addAnswer(){
        //var newAnswer = {} as Answer;
        //newAnswer.id = "1";
        //newAnswer.text = "Aqui"
        //setAnswers([...answers,newAnswer])
        console.log("Adicionar resposta.....")
    }

    return(
        <>
            <Header
                title="Adicionar Pergunta"
                icon="arrow-back-sharp"
            />
            <Container>
                <Row>
                    <DefaultInput
                        placeholder="Título da pergunta"
                    />
                </Row>
                <Row>
                    <Button
                        text="Salvar"
                        button_style="sucess"
                    />
                </Row>
                <Row>
                    <Button
                        text="Adicionar Resposta"
                        button_style="sucess_blue"
                        onPress={() => console.log("Adicionar resposta.....")}
                    />
                </Row>
                <FlatList
                    data={answers}
                    renderItem={({item}) => (
                        <Text key = {item.id}>
                            {item.text}
                        </Text>
                    )}
                    keyExtractor={answer => answer.id}
                />
            </Container>
                   
        </>
    );
}