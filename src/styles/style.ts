import styled from "styled-components/native";
import {TextInput} from "react-native";

export const Container = styled.View`
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex:1;
`;

export const Row = styled.View`
    align-items: flex-start;
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;


export const DefaultInput = styled(TextInput)`
    background-color: ${({theme}) => theme.colors.background};
    margin: 20px;
    margin-bottom: 10px;
    min-height: 55px;
    border-radius: 5px;
    padding: 10px;
    flex: 1;
`;