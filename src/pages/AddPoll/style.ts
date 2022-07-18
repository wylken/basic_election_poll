import styled from "styled-components/native";
import {TextInput} from "react-native";

export const PollNameInput = styled(TextInput)`
    background-color: ${({theme}) => theme.colors.background};
    margin: 20px;
    margin-bottom: 10px;
    min-height: 55px;
    border-radius: 5px;
    padding: 10px;
`;


export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
`;