import React from "react";
import { FlatList, Text } from "react-native";

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
    }
]

export function PollsList(){
    return(
        <FlatList
            data={DATA}
            renderItem={({item}) => (
                <Text>{item.title}</Text>
            )}
            keyExtractor={(item: Polls) => item.id}
        />
    )
}