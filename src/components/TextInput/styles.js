import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 40px;
    margin-top: 17px;
`;

export const Input = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.white};
    flex: 1;
    font-size: 13px;
    padding-top: 3px;
    border-radius: 8px;
    padding-left: 24px;
    font-family: ${({ theme }) => theme.fonts.BOLD};
    color: ${({ theme }) => theme.colors.black[100]};
`;
