import styled from "styled-components/native";

export const ContainerSucess = styled.TouchableOpacity`
    margin-left: 20px;
    margin-right: 20px;
    min-height: 55px;
    background-color: ${({theme}) => theme.colors.sucess};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.colors.text_light};
`;

export const Container = styled(ContainerSucess)`
    background-color: ${({theme}) => theme.colors.background};
`;

export const TextButtonLight = styled.Text`
    color: ${({theme}) => theme.colors.text_light};
`;

export const TextButton = styled.Text`
    color: ${({theme}) => theme.colors.title};
`;