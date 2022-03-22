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
    color: ${({ theme }) => theme.colors.black}
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

export const Card = styled.View`
    background-color: ${({ theme, isComplete }) => isComplete ? theme.colors.gray['200'] : theme.colors.white};
    border-radius: 20px;
    padding: 12px 16px;
    height: 107px;
    margin-top: 6px;
    margin-bottom: 6px;
`;

export const CardTitle = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.SEMIBOLD};
    color: ${({ theme, isComplete }) => isComplete ? theme.colors.gray['100'] : theme.colors.gray['400']};
`;

export const CardText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.SEMIBOLD};
    font-size: 12px;
    opacity: 0.7;
    color: ${({ theme, isComplete }) => isComplete ? theme.colors.gray['300'] : theme.colors.gray['200']};
    width: 170px;
`;