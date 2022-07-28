import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from "../pages/Dashboard";
import { AddPoll } from "../pages/AddPoll";
import { AddQuestion } from "../pages/AddQuestion";
import { SingleInput } from "../pages/SingleInput";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator>
            <Screen 
                name="Dashboard"
                component = {Dashboard}
                options={
                    { 
                        title: 'Pesquisas' 
                    }
                }
            />
            <Screen 
                name="AddPoll"
                component = {AddPoll}
                options={
                    { 
                        title: 'Adicionar Pesquisa' 
                    }
                }
            />
            <Screen 
                name="AddQuestion"
                component = {AddQuestion}
                options={
                    { 
                        title: 'Adicionar Pergunta' 
                    }
                }
            />
            <Screen 
                name="SingleInput"
                component = {SingleInput}
                options={
                    { 
                        title: '' 
                    }
                }
            />
        </Navigator>
    )
}