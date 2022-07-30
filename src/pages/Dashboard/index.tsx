import React, {useState, useEffect} from "react";
import { FlatList } from "react-native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SwipeView from 'react-native-swipeview';
import { v4 as uuid } from 'uuid';

import { Header } from "../../Components/Header";
import { PollsList } from "../../Components/PollsList";
import { ListItem, ListItemTitle, Row, Container, DefaultInput } from "../../styles/style";
import { Button } from "../../Components/Button";

import {PollInterface as Poll} from "../../interfaces/Interfaces"

interface NavigationProps {
    navigation: NativeStackNavigationProp<any,any>
  };

export function Dashboard({route, navigation}:NavigationProps){
    const params = route.params;
    const [polls, setPolls] =  useState<Poll[]>([{
        id:"Aqui...",
        text:"Rapaz...",
        questions:[]
    }]);

    useEffect(() => {
        if(route.params?.poll){
            let poll = route.params.poll
            if(poll.id == 0){
                poll.id = uuid();
                setPolls([...polls, poll])
            }
            else{
                let newPolls = polls.map((item) =>{
                    if(item.id == poll.id){
                        item = poll;
                    }
                    return item
                });

                setPolls(newPolls);

            }
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
                    <Button
                        text="Adicionar Pesquisa"
                        button_style="sucess_blue"
                        onPress={() => navigation.navigate("AddPoll")}
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
                                            navigation.navigate("AddPoll", {poll:item})
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
            </Container>
        </>
    )
}

