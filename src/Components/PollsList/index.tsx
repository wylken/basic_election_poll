import React from "react";
import { FlatList, Text, View } from "react-native";

import {Container, TouchablePoll, TitlePoll} from "./styles"

export interface Polls{
    id: string,
    title:string
}

const DATA = [
    {
        id: '1',
        title:'Quinto Constitucional do TJ?',
    },
    {
        id: '2',
        title:'Eleições Municipais 2020',
    },
    {
        id: '3',
        title:'Lorem Ipsum is simply dummy text of the printing and typesetting',
    }
]

export function PollsList(){
    return(
        <Container>
            <FlatList
                data={DATA}
                renderItem={({item}) => (
                    <TouchablePoll>
                        <TitlePoll>{item.title}</TitlePoll>
                    </TouchablePoll>
                )}
                keyExtractor={(item: Polls) => item.id}
            />
        </Container>
    )
}