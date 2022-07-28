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
    background-color: ${({theme}) => theme.colors.shape};
    margin: 20px;
    margin-bottom: 10px;
    min-height: 55px;
    border-radius: 5px;
    padding: 10px;
    flex: 1;
`;

export const ListItem = styled.TouchableOpacity`
    height: 60px;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    border-bottom-width: 1px;
    border-style: solid;
    padding-left: 20px;
    padding-right: 10px;
    border-bottom-color: ${({theme})=>theme.colors.line};
    
`;
export const ListItemTitle = styled.Text`
    font-size: 14px;
    color: ${({theme})=> theme.colors.title};
`;