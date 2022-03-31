import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding-top: 24px;
    background-color: ${({ theme }) => theme.colors.main};
`;

export const TopContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 24px;
    margin-bottom: 8px;
`;

export const UserTitle = styled.Text`
    font-size: 15px;
    font-family: ${({ theme }) => theme.fonts.SEMIBOLD};
    color: ${({ theme }) => theme.colors.gray['400']};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.BOLD};
    font-size: 28px;
    color: ${({ theme, isLight }) => isLight ? theme.colors.white : theme.colors.black[200]}
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.purple};
    height: 40px;
    width: 96px;
`;

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.SEMIBOLD};
    font-size: 13px;
    color: ${({ theme }) => theme.colors.white}
`;

export const CardContainer = styled.ScrollView`
    padding: 0px 24px;
`;

export const ModalContainer = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.3);
    justify-content: flex-end;
`;

export const AddNoteContainer = styled.View`
    height: 65%;
    align-items: center;
    padding-top: 24px;
    background-color: ${({ theme }) => theme.colors.purple};
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
`;

export const Input = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.white};
    height: ${({ isDescription }) => isDescription ? '50%' : '40px'};
    width: 80%;
    font-size: 13px;
    margin-top: 12px;
    padding-top: 3px;
    border-radius: 8px;
    padding-left: 24px;
    font-family: ${({ theme }) => theme.fonts.BOLD};
    color: ${({ theme }) => theme.colors.black[100]};
`;

export const CloseModalIcon = styled.Text`
    font-size: 28px;
    font-family: ${({ theme }) => theme.fonts.BOLD};;
    color: ${({ theme }) => theme.colors.white};
    position: absolute;
    margin-top: 24px;
    right: 32px;
`;
