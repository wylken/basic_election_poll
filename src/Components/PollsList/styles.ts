import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    background-color:"#FFFF00";
    justify-content: flex-start;
`;


export const TouchablePoll = styled.TouchableOpacity`
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

export const TitlePoll = styled.Text`
    font-size: 14px;
    color: ${({theme})=> theme.colors.title};
`;
