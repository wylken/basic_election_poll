import React from "react";
import { View, Text } from "react-native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Header } from "../../Components/Header";
import { PollsList } from "../../Components/PollsList";
import { Container, Row } from "../../styles/style";
import { Button } from "../../Components/Button";

interface NavigationProps {
    navigation: NativeStackNavigationProp<any,any>
  };

export function Dashboard({navigation}:NavigationProps){
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
                    <PollsList/>
                </Row>
            </Container>
        </>
    )
}

