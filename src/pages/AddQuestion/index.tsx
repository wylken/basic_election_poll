import React, {useState, useEffect} from "react";
import {ScrollView, FlatList, Alert } from "react-native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SwipeView from 'react-native-swipeview';
import { v4 as uuid } from 'uuid';

import { Button } from "../../Components/Button";
import {Header} from "../../Components/Header"
import { Container, DefaultInput, ListItem, Row, ListItemTitle } from "../../styles/style";
import {AnswerInterface as Answer} from "../../interfaces/Interfaces"


interface NavigationProps {
    navigation: NativeStackNavigationProp<any,any>
};

export function AddQuestion({route, navigation}:NavigationProps){

    const [answers, setAnswers] =  useState<Answer[]>([]);
    const [title, setTitle] = useState("");
    const params = route.params

    useEffect(() => {
        
        if(route.params?.singleInputValue){
            setAnswers([...answers, route.params.singleInputValue])
        }
        if(route.params?.answer){
            setAnswers(route.params.answer.answers)
            setTitle(route.params.answer.text)
        }
     }, [params]);

     function deleteItemById(id:any){
        const filteredData = answers.filter(item => item.id !== id);
        setAnswers(filteredData);
      }

    return(
        <>
            <Container>
                <Row>
                    <DefaultInput
                        placeholder="Título da pergunta"
                        value = {title}
                        onChangeText = {setTitle}
                    />
                </Row>
                <Row>
                    <Button
                        text="Salvar"
                        button_style="sucess"
                        onPress={()=>{
                            if(title.length > 0){
                                navigation.navigate("AddPoll", {poll:{id:uuid(), text:title, answers:answers}});
                            }
                            else{
                                Alert.alert("Atenção","Informe um nome para a pergunta!");
                            }
                            
                        }}
                    />
                </Row>
                <Row>
                    <Button
                        text="Adicionar Resposta"
                        button_style="sucess_blue"
                        onPress={() => navigation.navigate("SingleInput", {placeholder:"Digite a resposta...", screen:"AddQuestion"})}
                    />
                </Row>
                <Row>
                    <FlatList
                        data={answers}
                        renderItem={({item}) => (
                            <SwipeView
                                key={item.id}
                                renderVisibleContent={() => 
                                    <ListItem >
                                        <ListItemTitle>
                                            {item.text}
                                        </ListItemTitle>
                                    </ListItem>
                                }
                                onSwipedLeft={() => deleteItemById(item.id)}
                                swipeDuration = {300}
                                swipeToOpenPercent = {40}
                                disableSwipeToRight = {true}
                            />
                                

                        )}
                        keyExtractor={answer => answer.id}
                    />
                </Row>
            </Container>
                   
        </>
    );
}