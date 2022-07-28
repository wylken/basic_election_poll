import React, {useState, useEffect} from "react";
import {ScrollView, FlatList, Text} from "react-native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button } from "../../Components/Button";
import {Header} from "../../Components/Header"
import { Container, DefaultInput, Row } from "../../styles/style";

interface Answer {
    id: string;
    text:string;
}

interface NavigationProps {
    navigation: NativeStackNavigationProp<any,any>
};

export function AddQuestion({route, navigation}:NavigationProps){

    const [answers, setAnswers] =  useState<Answer[]>([{id:"1", text:"nada"}]);
    const params = route.params

    useEffect(() => {
        if(route.params?.singleInputValue){
            setAnswers([...answers, route.params.singleInputValue])
        }
     }, [params]);

    function addAnswer(){
        var newAnswer = {} as Answer;
        newAnswer.id = "10";
        newAnswer.text = "Aqui"
        setAnswers([...answers,newAnswer])
        console.log("Adicionar resposta.....")
    }

    return(
        <>
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
                        onPress={() => navigation.navigate("SingleInput", {placeholder:"Digite a resposta...", screen:"AddQuestion"})}
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