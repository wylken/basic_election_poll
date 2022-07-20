import React from "react"
import { Button } from "../../Components/Button"
import { Container, DefaultInput, Row } from "../../styles/style"

export function SingleInput(){
    return(
        <Container>
            <Row>
                <DefaultInput placeholder="Digite a pergunta..."/>
            </Row>
            <Row>
                <Button 
                    text="Adicionar"
                    button_style="sucess"
                />
            </Row>
        </Container>
    )
}