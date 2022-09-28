import styled from 'styled-components/native';

export const Card = styled.View`
    background-color: ${({ theme, isComplete }) => isComplete ? theme.colors.gray['200'] : theme.colors.white};
    border-radius: 20px;
    padding: 20px 24px;
    height: 125px;
    margin-top: 10px;
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