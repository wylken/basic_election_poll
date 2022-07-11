import styled from "styled-components/native";

export const Container = styled.View`
    height: 60px;
    justify-content: center;
    padding: 10px;
    background-color: ${({theme}) => theme.colors.primary};
    flex-direction: row;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text_light};
    font-weight: bold;
    font-size: 16px;
    flex: 1;
    align-self:center;
`;

export const TitleButton = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 10px;
    border-radius: 5px;
`;