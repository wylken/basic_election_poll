import React, {useState, useEffect} from "react";
import { FlatList } from "react-native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SwipeView from 'react-native-swipeview';
import { v4 as uuid } from 'uuid';

import { Button } from "../../Components/Button";
import { ListItem, ListItemTitle, Row, Container, DefaultInput } from "../../styles/style";

import {QuestionInterface as Question} from "../../interfaces/Interfaces"

interface NavigationProps {
    navigation: NativeStackNavigationProp<any,any>
};
export function AddPoll({route, navigation}:NavigationProps){
    const params = route.params;
    const [text, setText] = useState("")
    const [id, setId] = useState(0)
    const [questions, setQuestions] =  useState<Question[]>([]);

    useEffect(() => {
        if(route.params?.poll){
            setQuestions(route.params.poll.questions);
            setText(route.params.poll.text);
            setId(route.params.poll.id);
        }
        if(route.params?.question){
            let question = route.params.question
            if(question.id == 0){
                question.id = uuid();
                setQuestions([...questions, question])
            }
            else{
                let newQuestions = questions.map((item) =>{
                    if(item.id == question.id){
                        item = question;
                    }
                    return item
                });

                setQuestions(newQuestions);

            }
        }
     }, [params]);
    
     function deleteItemById(id:any){
        const filteredData = questions.filter(item => item.id !== id);
        setQuestions(filteredData);
      }

    return(
        <>
            <Container>
                <Row>
                    <DefaultInput 
                        placeholder="Nome da pesquisa..."
                        value = {text}
                        onChangeText={setText}
                    />
                </Row>
                <Row>
                    <Button
                        text="Adicionar pergunta"
                        button_style="sucess_blue"
                        onPress={() => navigation.navigate("AddQuestion")}
                    />
                </Row>
                <Row>
                <FlatList
                        data={questions}
                        renderItem={({item}) => (
                            <SwipeView
                                key={item.id}
                                renderVisibleContent={() => 
                                    <ListItem 
                                        onPress={()=>{
                                            navigation.navigate("AddQuestion", {question:item})
                                        }}
                                    >
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
                        keyExtractor={questions => questions.id}
                    />
                </Row>
                <Row>
                    <Button
                        text="Salvar Pesquisa"
                        button_style="sucess"
                        onPress={
                           () => {
                               navigation.navigate("Dashboard", {poll:{id:id, text:text, questions:questions}})
                           } 
                        }
                    />
                </Row>
            </Container>

        </>
    )
}