import styled from "styled-components/native";

export const ContainerSucessBlue = styled.TouchableOpacity`
    margin-left: 20px;
    margin-right: 20px;
    min-height: 55px;
    margin-top: 20px;
    margin-bottom: 10px;
    background-color: ${({theme}) => theme.colors.primary_blue};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.colors.text_light};
    flex:1;
`;

export const ContainerSucess = styled(ContainerSucessBlue)`
    background-color: ${({theme}) => theme.colors.sucess};
`;

export const Container = styled(ContainerSucessBlue)`
    background-color: ${({theme}) => theme.colors.background};
`;

export const TextButtonLight = styled.Text`
    color: ${({theme}) => theme.colors.text_light};
`;

export const TextButton = styled.Text`
    color: ${({theme}) => theme.colors.title};
`;