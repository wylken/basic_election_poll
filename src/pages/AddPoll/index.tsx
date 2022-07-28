import React, {useState, useEffect} from "react";
import { FlatList } from "react-native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SwipeView from 'react-native-swipeview';

import { Button } from "../../Components/Button";
import { ListItem, ListItemTitle, Row, Container, DefaultInput } from "../../styles/style";

import {PollInterface as Poll} from "../../interfaces/Interfaces"

interface NavigationProps {
    navigation: NativeStackNavigationProp<any,any>
};
export function AddPoll({route, navigation}:NavigationProps){
    const params = route.params;
    const [polls, setPolls] =  useState<Poll[]>([{
        id:"Aqui...",
        text:"Rapaz...",
        answers:[]
    }]);

    useEffect(() => {
        if(route.params?.poll){
            setPolls([...polls, route.params.poll])
        }
     }, [params]);
    
     function deleteItemById(id:any){
        const filteredData = polls.filter(item => item.id !== id);
        setPolls(filteredData);
      }

    return(
        <>
            <Container>
                <Row>
                    <DefaultInput 
                        placeholder="Nome da pesquisa..."
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
                        data={polls}
                        renderItem={({item}) => (
                            <SwipeView
                                key={item.id}
                                renderVisibleContent={() => 
                                    <ListItem 
                                        onPress={()=>{
                                            navigation.navigate("AddQuestion", {answer:item})
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
                        keyExtractor={polls => polls.id}
                    />
                </Row>
                <Row>
                    <Button
                        text="Salvar Pesquisa"
                        button_style="sucess"
                    />
                </Row>
            </Container>

        </>
    )
}