import React, {useState} from "react"
import type { NativeStackNavigationProp  } from '@react-navigation/native-stack';
import { v4 as uuid } from 'uuid';

import { Button } from "../../Components/Button"
import { Container, DefaultInput, Row } from "../../styles/style"
import { Alert } from "react-native";

interface NavigationProps {
    navigation: NativeStackNavigationProp<any,any>
};

export function SingleInput({ route, navigation }: NavigationProps){
    const [inputValue, setInputValue] = useState("");


    return(
        <Container>
            <Row>
                <DefaultInput
                    placeholder={route.params.placeholder}
                    value={inputValue}
                    onChangeText={setInputValue}
                />
            </Row>
            <Row>
                <Button 
                    text="Adicionar"
                    button_style="sucess"
                    onPress={ () => {
                        if(inputValue.length > 0){
                            navigation.navigate(route.params.screen, {singleInputValue:{id:uuid(), text:inputValue}});
                        }
                        else{
                            Alert.alert("Atenção","Entre com algum texto!");
                        }
                    }}
                />
            </Row>
        </Container>
    )
}