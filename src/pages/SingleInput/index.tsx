import React from "react"
import type { NativeStackNavigationProp  } from '@react-navigation/native-stack';

import { Button } from "../../Components/Button"
import { Container, DefaultInput, Row } from "../../styles/style"

interface NavigationProps {
    navigation: NativeStackNavigationProp<any,any>
};

export function SingleInput({ route, navigation }: NavigationProps){
    return(
        <Container>
            <Row>
                <DefaultInput placeholder={route.params.placeholder}/>
            </Row>
            <Row>
                <Button 
                    text="Adicionar"
                    button_style="sucess"
                    onPress={ () => {
                        navigation.navigate(route.params.screen, {singleInputValue:{id:"2", text:"Aeeeee!"}});
                    }}
                />
            </Row>
        </Container>
    )
}